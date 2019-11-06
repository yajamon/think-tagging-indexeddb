import { Identity } from "./identity";

export abstract class Entity {
    constructor(readonly id: Identity) {
    }
}
