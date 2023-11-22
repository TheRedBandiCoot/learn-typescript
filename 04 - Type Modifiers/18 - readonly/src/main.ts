type Person = {
  readonly id: number;
  name: string;
  age: number;
};

const person: Person = {
  id: 123,
  name: 'John',
  age: 45,
};

person.id = 456;

console.log(person.id);

type NumArr = readonly number[];

const arr: NumArr = [1, 2, 3];
arr.push(4);
arr[5] = 8;

console.log(arr);
