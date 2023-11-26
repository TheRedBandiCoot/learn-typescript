type Person = {
  name: string;
};
type Todo = {
  title: string;
};

function print(obj: Person | Todo) {
  if (isPerson(obj)) {
    console.log(obj.name);
    return;
  }
  console.log(obj.title);
}

function isPerson(obj: Person | Todo): obj is Person {
  return 'name' in obj;
}

const PRIORITY = ['High', 'Medium', 'Low'] as const;

type Priority = (typeof PRIORITY)[number];
type TodoType = {
  title: string;
  description: string;
};

function func(todo: TodoType) {
  if (isPriority(todo.description)) {
    todo.description;
    return;
  }
  todo.description;
}

function isPriority(description: string): description is Priority {
  return PRIORITY.includes(description as Priority);
}
