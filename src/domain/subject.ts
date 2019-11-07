import { Entity } from "./entity.js";
import { Name } from "./name.js";
import { Tag } from "./tag.js";
import { Identity } from "./identity.js";
import { SubjectRepository } from "./subjectRepository.js";

export class Subject extends Entity {
    public static create(repository: SubjectRepository, name: string, ) {
        const s = new Subject(
            repository.nextId(),
            new Name(name),
            []
        );
        return s;
    }

    constructor(id: Identity, public name: Name, public tags: Tag[]) {
        super(id);
    }
}
