const todos: string[] = ["walk the dog", "code this site", "Read a book"];

const addTodoInput = document.getElementById('todo-input') as HTMLInputElement;
const addTodoButton = document.getElementById('add-todo-btn') as HTMLButtonElement;
const todoList = document.getElementById('todos-list') as HTMLUListElement;

// Functions 
const renderTodoInReadMode = (todo: string): HTMLLIElement => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todo;
    span.addEventListener('dblclick', () => {
        const idx = todos.indexOf(todo);
        todoList.replaceChild(
            renderTodoInEditMode(todo),
            todoList.childNodes[idx]
        );
    });
    li.append(span);
    const button = document.createElement('button');
    button.textContent = "Done";
    button.addEventListener('click', () => {
        const idx = todos.indexOf(todo);
        removeTodo(idx);
    })
    li.append(button)
    console.log(todos);
    return li;
}

const removeTodo = (index: any) => {
    todos.splice(index, 1);
    console.log(todoList);
    todoList.childNodes[index].remove;
}

const renderTodoInEditMode = (todo: string): HTMLLIElement => {
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = "text";
    input.value = todo;
    li.append(input);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = "Save";
    saveBtn.addEventListener('click', () => {
        const idx = todos.indexOf(todo);
        updateTodo(idx, input.value);
    });
    li.append(saveBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener('click', () => {
        const idx = todos.indexOf(todo);
        todoList.replaceChild(
            renderTodoInReadMode(todo),
            todoList.childNodes[idx]
        )
    });
    li.append(cancelBtn);

    return li;
}

const updateTodo = (index: any, description: string) => {
    todos[index] = description;
    const todo = renderTodoInReadMode(description);
    todoList.replaceChild(todo, todoList.childNodes[index])
}

const addTodo = () => {
    const description = addTodoInput.value;

    todos.push(description);
    const todo = renderTodoInReadMode(description);
    todoList.append(todo);

    addTodoInput.value = '';
    addTodoButton.disabled = true;
}

console.log(todos);

todos.forEach((todo) => {
    console.log(todo);
    todoList.append(renderTodoInReadMode(todo));
})

addTodoInput.addEventListener('input', () => {
    addTodoButton!.disabled = addTodoInput.value.length < 3;
})

addTodoInput.addEventListener('keydown', ({ key }) => {
    if(key === 'Enter' && addTodoInput.value.length >= 3){
        addTodo();
    }
})

addTodoButton.addEventListener('click', () => {
    addTodo();
})

