import { Name } from "../domain/name.js";
import { Subject } from "../domain/subject.js";

export class Application {
    public createSubject(name: string): Subject {
        const s = new Subject();
        s.name = new Name(name);
        return s;
    }

}
