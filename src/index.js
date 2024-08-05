import { addProject,addToDo } from "./notesObjects";


const Project = addProject("test");
const ToDo = addToDo("testing","tester","exp","fj");
console.log(Project,ToDo);