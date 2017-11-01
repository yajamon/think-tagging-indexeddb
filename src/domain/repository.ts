import { Identity } from "./identity.js";

export interface Repository<T> {
    add(entity: T): void;
    remove(id: Identity): void;
    update(entity: T): void;
}
