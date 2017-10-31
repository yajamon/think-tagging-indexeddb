import { Entity } from "./entity.js";
import { Name } from "./name.js";
import { Tag } from "./tag.js";

export class Subject extends Entity {
    public name: Name;
    public tags: Tag[];
}
