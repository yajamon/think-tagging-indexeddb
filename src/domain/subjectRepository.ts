import { Identity } from "./identity.js";
import { Repository } from "./repository.js";
import { Subject } from "./subject.js";

export class SubjectRepository implements Repository<Subject> {
    public async add(subject: Subject) {
        //
    }
    public async remove(id: Identity) {
        //
    }
    public async update(subject: Subject) {
        //
    }
}
