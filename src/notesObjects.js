const projects = [];

function createProject(title){
    let ToDo = [];
    return{title, ToDo};
}

function createToDo(title,description,dueDate,priority){
    return{title,description,dueDate,priority};
}

export function addProject(title){
    const newProject = createProject(title);
    return newProject;
}

export function addToDo(title,description,dueDate,priority){
    const newToDo = createToDo(title,description,dueDate,priority);
    return newToDo

}

