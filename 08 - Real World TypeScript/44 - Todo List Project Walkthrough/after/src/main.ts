import './styles.css';

type Todo = {
  id: string;
  name: string;
  isCompleted: boolean;
};

const form = document.querySelector<HTMLFormElement>('#new-todo-form')!;
const todoInput = document.querySelector<HTMLInputElement>('#todo-input')!;
const list = document.querySelector<HTMLInputElement>('#list')!;

let todos = loadTodos();

todos.forEach(renderNewTodo);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoName = todoInput.value;
  if (!todoName) return console.log('ass');
  const newTodo = {
    id: crypto.randomUUID(),
    name: todoName,
    isCompleted: false,
  };
  todos.push(newTodo);
  renderNewTodo(newTodo);
  saveTodos();
  todoInput.value = '';
});

function renderNewTodo(todo: Todo) {
  const listItems = document.createElement('li');
  listItems.classList.add('list-item');

  const label = document.createElement('label');
  label.classList.add('list-item-label');

  const checkbox = document.createElement('input');
  checkbox.classList.add('label-input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.isCompleted;
  checkbox.addEventListener('change', () => {
    todo.isCompleted = checkbox.checked;
    saveTodos();
  });

  const textElement = document.createElement('span');
  textElement.classList.add('label-text');
  textElement.textContent = todo.name;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItems.remove();
    todos = todos.filter((t) => t.id != todo.id);
    saveTodos();
  });

  label.append(checkbox, textElement);
  listItems.append(label, deleteButton);
  list.append(listItems);
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const value = localStorage.getItem('todos');
  if (value == null) return [];
  return JSON.parse(value) as Todo[];
}
