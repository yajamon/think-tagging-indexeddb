import { Identity } from "../domain/identity.js";
import { Subject } from "../domain/subject.js";
import { SubjectRepository } from "../domain/subjectRepository.js";

export class SubjectRepositoryImplNormalizedDB implements SubjectRepository {
    private innerId: number = 0;
    nextId(): Identity {
        this.innerId += 1;
        return new Identity(this.innerId);
    }

    public add(subject: Subject) {
        // code
    }

    public update(subject: Subject) {
        // code
    }

    public remove(id: Identity) {
        // code
    }
}
