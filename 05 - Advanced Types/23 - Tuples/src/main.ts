const person = {
  name: 'John',
  age: 45,
  address: {
    street: 'John Street',
  },
};

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

type Tuples = [number, boolean];
const tuples: Tuples = [123, true];

// Use case OBJECT ENTRIES, React Hooks [state]
