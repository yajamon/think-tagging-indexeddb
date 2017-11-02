import { Subject } from "../domain/subject.js";

export class Application {
    public createSubject(name: string): Subject {
        return Subject.create("a subject");
    }

}
