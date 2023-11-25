type Todo = {
  id: string;
  name: string;
  completed: boolean;
  status: string;
};
type NewTodoPick = Pick<Todo, 'completed' | 'name' | 'status'>;
type NewTodoOmit = Omit<Todo, 'id'>;

function saveTodo(todo: NewTodoOmit): Todo {
  return { ...todo, id: crypto.randomUUID() };
}

function renderTodo(todo: Todo) {
  const div = document.createElement('div');
  div.id = todo.id;
}

//@ my example
const obj = {
  name: 'Sdas',
  addy: 'asdas',
  age: 45,
  isProgrammer: true,
};

type Obj = typeof obj;

type ObjFilter = Pick<Obj, 'name' | 'age'>;

const obj2: ObjFilter = {
  name: 'sd',
  age: 454,
};
