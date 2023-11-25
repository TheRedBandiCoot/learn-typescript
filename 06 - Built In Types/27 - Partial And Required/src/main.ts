type PersonRequire = {
  name?: string;
  age?: number;
  isProgrammer?: boolean;
};

type PersonPartial = {
  name: string;
  age: number;
  isProgrammer: boolean;
};

type NewPersonRequire = Required<PersonRequire>;
type NewPersonPartial = Partial<PersonPartial>;

type PersonRequirePickOmit = Required<Pick<PersonRequire, 'name'>> & Omit<PersonRequire, 'name'>;

const person1: PersonRequirePickOmit = {
  age: 45,
  isProgrammer: true,
  name: 'Dsad',
};

type Person = Partial<Pick<PersonPartial, 'isProgrammer'>> & Omit<PersonPartial, 'isProgrammer'>;

const person2: Person = {
  age: 25,
  name: 'asd',
  // isProgrammer: false,
};
