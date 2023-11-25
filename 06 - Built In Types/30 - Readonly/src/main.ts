const person = {
  name: 'John',
};

type TypeOne = {
  readonly foo: string;
  bar: boolean;
};

type Person = typeof person;

type TypeOneReadOnly = Readonly<TypeOne>;
