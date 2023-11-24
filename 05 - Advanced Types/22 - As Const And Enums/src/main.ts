let a = 1 as const;
const b = 5;
const arr = [1, 2, 3, true] as const;

arr[0] = 5;
arr.push(7);
arr;

const arr2: readonly (number | boolean)[] = [1, 2, true];
arr2[0] = 5;
arr2;

const STATUS = ['Active', 'Inactive', 'Invisible'] as const;

type Person = {
  status: (typeof STATUS)[number];
};

const user: Person = {
  status: 'Active',
};

type Obj = {
  readonly name: string;
  readonly addy: {
    readonly street: string;
  };
};

// const obj:Obj = {
const obj = {
  name: 'John',
  addy: {
    street: '123 main st.',
  },
} as const;

obj.addy.street = 'ddsad';
obj;
