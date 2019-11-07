import { Subject } from "../domain/subject.js";
import { SubjectRepositoryImplNormalizedDB } from "../infrastructure/SubjectRepositoryImplNormalizedDB.js";

export class Application {
    subjectRepo = new SubjectRepositoryImplNormalizedDB()
    public createSubject(name: string): Subject {
        return Subject.create(this.subjectRepo, "a subject");
    }

}
