// type Status = 'active' | 'inactive' | 'hidden' | 'disabled';
type Person = {
  name: string;
  status: 'active' | 'inactive' | 'hidden' | 'disabled';
};

function printStatus(status: Person['status']) {
  console.log(status);
}

const person: Person = {
  name: 'John',
  status: 'hidden',
};

printStatus(person.status);

type PeopleGroupedBySkillA = {
  [index in Person['status']]: Person[];
};

// const a: PeopleGroupedBySkillA = {
//   active: [{ name: 'Sam', status: 'active' }],
// };
// !
type PeopleGroupedBySkillB = {
  [index: string]: Person[];
};
const b: PeopleGroupedBySkillB = {
  sdfs: [{ name: 'Sam', status: 'active' }],
};

const arr = ['String1', 'String2', true];

// type A = (typeof arr)[0];
type A = (typeof arr)[number];

const arr2: A = 'sdas';

const obj1 = {
  name: 'John',
  age: 45,
  isProgrammer: true,
};

// type Obj = (typeof obj1)["name"]
type Obj = (typeof obj1)[keyof typeof obj1];

const obj2: Obj = 'SAds';
