import { Identity } from "./identity.js";

export interface Repository<T> {
    nextId(): Identity;
    add(entity: T): void;
    remove(id: Identity): void;
    update(entity: T): void;
}
