function printName(firstName: string, lastName: string) {
  console.log(`${firstName} ${lastName}`);
}

printName('Gourab', 'Chatterjee');

function addSum(x: number, y: number) {
  return x + y;
}

const c = addSum(5, 8);

console.log(c);

function personName(person: { name: string }) {
  console.log(person.name);
}
// const person = { username: 'Kyle', age: 26 };
const person = { name: 'Kyle', age: 26 };

personName(person);
