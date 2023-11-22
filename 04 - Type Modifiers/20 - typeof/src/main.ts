const person = { name: 'John', age: 28, isProgrammer: true };
const people: (typeof person)[] = [];

people.push(person);
people.push({ name: 'sally', age: 38, isProgrammer: true });
people.push(2);

console.log(people);

function sayHi(name: string) {
  console.log(name);
  return 5;
}

type FuncType = typeof sayHi;
