type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isCompleted: boolean;
  description?: string;
  dueData: Date | string;
};

function extendTodo(todo: Todo) {
  type A = Todo['dueData'];
  const dueDateStr = typeof todo.dueData === 'string' ? todo.dueData : todo.dueData;
  const dueDateDate = todo.dueData instanceof Date ? todo.dueData : todo.dueData;
}

const form = document.querySelector<HTMLFormElement>('form');
const form2 = document.querySelector<HTMLFormElement>('form')!;

if (form) {
  form.addEventListener('click', () => {});
}

form?.addEventListener('click', () => {});
form2!.addEventListener('click', () => {});

function extendTodo2(todo: Todo) {
  if (todo.dueData instanceof Date) {
    const a = todo.dueData;
    return a;
  }
  const b = todo.dueData;
}

function extendTodo3(todo: Required<Pick<Todo, 'priority'>>) {
  let p1, p2, p3;
  switch (todo.priority) {
    case 'High':
      p1 = todo.priority;
      break;
    case 'Normal':
      p2 = todo.priority;
      break;
    default:
      p3 = todo.priority;
  }
  return p1 || p2 || p3;
}

extendTodo3({ priority: 'High' });

function todoDes(todo: Todo) {
  const description = todo.description;

  if (description != undefined) {
    description.length;
  }
  description?.length;
}
