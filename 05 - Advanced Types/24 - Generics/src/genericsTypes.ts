// @type

type User<T = number> = {
  arr: T;
};

const user: User<Array<number>> = {
  arr: [1, 2, 3, 5],
};

const user2: User<string[]> = {
  arr: ['asd', 'sada'],
};

const user3: User<Array<undefined>> = {
  arr: [undefined, undefined],
};

const user4: User = {
  arr: true,
};
const user5: User<string> = {
  arr: 'dadas',
};

type APIResponse<TData extends object = { status: number }> = {
  data: TData;
};

const res1: APIResponse = {
  data: { status: 420 },
};

const res2: APIResponse<{ name: string; age: number }> = {
  data: { name: 'John', age: 45 },
};

const res3: APIResponse<number> = {
  data: 1215,
};

function arrToObj<T>(arr: [string, T][]) {
  const obj: {
    [index: string]: T;
  } = {};

  arr.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arr: [string, number | boolean][] = [
  ['keyOne', 1],
  ['keyTwo', 2],
  ['keyThree', true],
];

const newArr = arrToObj(arr);
newArr;

type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isCompleted: boolean;
  description?: string;
  dueData: Date | string;
};

function extendTodoOptional<T = Todo>(todo: T, key: keyof T) {
  return todo[key];
}
const a = extendTodoOptional({ priority: 'High', title: 'DAd' }, 'title');
console.log(a);

function extendTodoRequiredDefault<T = Todo, Key extends keyof T = keyof T>(key: Key, todo: T) {
  let p1, p2, p3;
  switch (todo[key]) {
    case 'High':
      p1 = todo[key];
      break;
    case 'Normal':
      p2 = todo[key];
      break;
    case 'Low':
      p3 = todo[key];
      break;
  }
  return p1 || p2 || p3;
}

const b = extendTodoRequiredDefault('priority', { title: 'dsaas', priority: 'High' });
b;
