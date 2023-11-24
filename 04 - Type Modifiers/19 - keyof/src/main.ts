type Person = {
  name: string;
  age: number;
  status?: boolean;
};

function getValue(key: keyof Person, person: Person) {
  return person[key];
}

const age = getValue('age', { name: 'john', age: 25 });

console.log(age);
