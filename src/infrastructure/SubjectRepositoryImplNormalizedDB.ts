import { Identity } from "../domain/identity.js";
import { Subject } from "../domain/subject.js";
import { SubjectRepository } from "../domain/subjectRepository.js";

interface SerializedSubject {
    id: number;
    name: string;
}
interface SerializedTag {
    id: number;
    name: string;
}

interface SerializedSubjectTag {
    subject_id: number;
    tag_id: number;
}

export class SubjectRepositoryImplNormalizedDB implements SubjectRepository {

    constructor(private db: IDBDatabase) { }

    public add(subject: Subject) {
        // code
        const [s, t, r] = this.serialize(subject);
        const transaction = this.db.transaction(["subjects", "tags", "subjects_tags"], "readwrite");
        const tags_store = transaction.objectStore("tags");
        t.forEach((tag) => {
            tags_store.add(t);
        });
        const subjects_store = transaction.objectStore("subjects");
        subjects_store.add(s);

        const subjcets_tags_store = transaction.objectStore("subjects_tags");
        r.forEach((relation) => {
            subjcets_tags_store.add(relation);
        });

    }

    public update(subject: Subject) {
        // code
    }

    public remove(id: Identity) {
        // code
    }

    private serialize(subject: Subject): [SerializedSubject, SerializedTag[], SerializedSubjectTag[]] {
        const tags: SerializedTag[] = subject.tags.map((tag) => ({ id: tag.id.value, name: tag.name.value }));
        const relation: SerializedSubjectTag[] = tags.map((tag) => ({ subject_id: subject.id.value, tag_id: tag.id }));
        return [
            {
                id: subject.id.value,
                name: subject.name.value,
            },
            tags,
            relation,
        ];
    }
}
