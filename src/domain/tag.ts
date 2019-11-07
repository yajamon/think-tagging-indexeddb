import { Entity } from "./entity.js";
import { Name } from "./name.js";
import { Identity } from "./identity.js";

export class Tag extends Entity {
    constructor(id: Identity, public name: Name) {
        super(id);
    }
}
