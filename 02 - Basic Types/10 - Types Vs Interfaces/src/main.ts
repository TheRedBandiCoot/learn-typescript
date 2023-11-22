type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends?: string[];
  address?: {
    street: string;
  };
};

const person: Person = {
  name: 'Gourab',
  age: 25,
  //   isProgrammer: true,
};
person.isProgrammer = true;

const person2: Person = {
  name: 'John',
  age: 28,
  friends: ['kyle', 'sally'],
  address: {
    street: '123 main st.',
  },
};

person2.friends = ['sam', 'greg'];

console.log(person2.friends);

type Age = number;

const userAge: Age = 23;

interface User {
  email: string;
  password: number;
}

const user: User = {
  email: 'sam@example.com',
  password: 123,
};

type ArrType = string[];

const arr: ArrType = ['One', 'Two', 'Three'];
