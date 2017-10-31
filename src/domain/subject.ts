import { Entity } from "./entity.js";
import { Tag } from "./tag.js";
export class Subject extends Entity {
    public name: string;
    public tags: Tag[];
}
