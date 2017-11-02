import { Entity } from "./entity.js";
import { Name } from "./name.js";
import { Tag } from "./tag.js";

export class Subject extends Entity {
    public static create(name: string) {
        const s = new Subject();
        s.name = new Name(name);
        return s;
    }

    public name: Name;
    public tags: Tag[];
}
