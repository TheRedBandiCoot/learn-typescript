type Person = {
  id: number;
};

type Students = {
  [index: string]: string[];
};

type StudentsRecord = Record<string, string[]>;
// type StudentsRecord = Record<Person['id'], string[]>;

const students: StudentsRecord = {
  name: ['ram', 'sam', 'kyle'],
};

const a = students['name'];
a;
