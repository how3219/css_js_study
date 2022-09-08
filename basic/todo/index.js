//input, todolist를 보여주는 화면을 렌더링.

const pipe =
    (...fns) =>
    (x) =>
        fns.reduce((v, f) => f(v), x);
const $ = document.querySelector.bind(document);

function InputView() {
    return `
    <input type=text id="todo-input" placeholder="입력하세요~">
    <button id="add-button">추가</button>
  `;
}

function TodoListView(todoList) {
    return `
    <ul>
      ${todoList.reduce((html, todo) => {
          return `${html} <li>${todo.name}</li>`;
      }, ``)}
    </ul>
  `;
}

function App(todoList) {
    const inputHTML = InputView();
    const todoListHTML = TodoListView(todoList);
    return `
    <div id="wrapper">${inputHTML} ${todoListHTML}</div>
  `;
}

function updateTodoList(todoList) {
    $('#wrapper ul').remove();
    const todoListHTML = TodoListView(todoList);
    $('#wrapper').insertAdjacentHTML('beforeend', todoListHTML);
}

function addTodoList(todoList) {
    const todoValue = $('#todo-input').value;
    todoList.push({ name: todoValue });
    return todoList;
}

function addTodoHandler(todoList) {
    pipe(addTodoList, updateTodoList)(todoList);
}

function onAddTodo(todoList) {
    $('#add-button').addEventListener('click', addTodoHandler.bind(undefined, todoList));
}

function html(mainHTML) {
    $('#app').innerHTML = mainHTML;
}

(function () {
    const todoList = [
        {
            name: '오늘은 놀기~',
        },
    ];

    pipe(App, html, onAddTodo.bind(undefined, todoList))(todoList);
})();
