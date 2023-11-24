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
