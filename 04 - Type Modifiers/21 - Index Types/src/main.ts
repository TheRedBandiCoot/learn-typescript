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
