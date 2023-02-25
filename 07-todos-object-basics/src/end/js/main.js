/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="INDEX HERE"
            type="checkbox"
            value="todo-INDEX HERE"
            COMPLETE HERE>
        DESCRIPTION HERE
    </li>

*/

let todos = [
    {
        description: 'Todo 1',
        complete: false,

    },
    {
        description: 'Todo 2',
        complete: true,
    }
];

let todoList = document.querySelector('.todo-list');
let todoForm = document.querySelector('#add-todo-form');
let completedTodoCount = document.querySelector('#todo-complete-count');

todoList.addEventListener('change', (evt) => {
    let todoCheck = evt.target;
    let todoId = todoCheck.dataset.todoId;
    // toggle the complete from true/false
    todos[todoId].complete = !todos[todoId].complete;
    // update the complete count
    calculateCompletedCount();
});

function calculateCompletedCount() {
    let count = todos.reduce((previousValue, currentTodo) => {
        if (currentTodo.complete) {
            previousValue += 1;
        }
        return previousValue;
    }, 0); // zero is the initial value

    // forEach solution
    // todos.forEach(todo => {
    //     if (todo.complete) {
    //         count += 1;
    //     }
    // });

    completedTodoCount.innerText = count;
}

todoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let todoDescription = todoForm.elements['todo-description'].value;
    addTodo(todoDescription);
    todoForm.reset();
});

function addTodo(todoDescription) {
    let newTodo = {
        description: todoDescription,
        complete: false
    };

    todos.push(newTodo);
    // render to show the new todo
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';
    // iterate over the array and render each todo
    todos.forEach((todo, idx) => {
        todoList.innerHTML += `
            <li class="list-group-item">
                <input class="form-check-input todo-status"
                    data-todo-id="${idx}"
                    type="checkbox"
                    value="todo-${idx}"
                    ${todo.complete ? 'checked' : ''}>
                ${todo.description}
            </li>`;
    });
}

renderTodos();
calculateCompletedCount();
