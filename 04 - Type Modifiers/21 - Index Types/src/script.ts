//@ Practices keyof, typeof, Defining Functions, Index Types

//* KeyOf
// type People = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
// };

// function printValue(key: keyof People, person: People) {
//   return person[key];
// }

// const data = printValue('age', { name: 'John', age: 27 });

// console.log(data);

//* TypeOf
// const person = { name: 'John', age: 54, isProgrammer: true };
// const peoples: (typeof person)[] = [];

// peoples.push(person);
// peoples.push({ name: 'Sally', age: 47, isProgrammer: true });
// // peoples.push(25)
// console.log(peoples);

// const obj1 = { id: 1215, status: 'active', isTrue: true, data: null };

// const obj2: typeof obj1 = {
//   id: 254,
//   status: 'inactive',
//   isTrue: true,
//   data: null,
// };

// console.log(obj2);

//* Defining Functions
// type User = {
//   name: string;
// };

// const user = {
//   name: 'John',
//   age: 27,
// };

// function printValue(user: User) {
//   console.log(user.name);
// }
// printValue({ name: 'sam', age: 27 });
// printValue(user);

//* Index Types
// type Status = 'Active' | 'Inactive' | 'Invisible';
// type User = {
//   name: string;
//   status: 'Active' | 'Inactive' | 'Invisible';
// };

// function printUserStatus(status: User['status']) {
//   console.log(status);
// }

// const user: User = {
//   name: 'Kyle',
//   status: 'Active',
// };

// printUserStatus(user.status);
