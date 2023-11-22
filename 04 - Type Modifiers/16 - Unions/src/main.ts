type Num = number | string | boolean;

let number: Num = 7;

number = 'seven';
number = true;
// number = null;

type Person = {
  name: string | null;
  status: 'active' | 'offline';
  age?: number;
};

const person: Person = {
  name: 'John',
  status: 'offline',
};

person.age = 30;

type StudentMarkSheet = {
  sheet: string;
};
// type StudentPresents = {
//   attendance: number;
// };

type StudentMarkSheetAndPresents =
  | StudentMarkSheet
  | {
      attendance: number;
    };

const studentsPresents: StudentMarkSheetAndPresents = {
  attendance: 8,
};
const studentsMarkSheet: StudentMarkSheetAndPresents = {
  sheet: 'Math = 0',
};
