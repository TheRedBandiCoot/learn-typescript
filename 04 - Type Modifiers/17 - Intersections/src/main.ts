import { Person } from './Person';

type PersonID = { id?: string };

// type PersonWithID = Person & PersonID & number & {name : number } ;
type PersonWithID = Person & PersonID;

const person: PersonWithID = {
  name: 'John',
  age: 40,
};

person.id = '1acd5';

interface PersonStatus {
  status?: 'active' | 'inactive';
}
interface PersonWithStatus extends Person, PersonStatus {}

const person2: PersonWithStatus = {
  name: 'John',
  age: 42,
  // status: 'active',
};

person2.status = 'inactive';
