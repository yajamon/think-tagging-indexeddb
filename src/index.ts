import { Application } from "./application/application.js";

const app = new Application();
const s = app.createSubject("a subject");
console.log(s.name);
