type Student = {
  id?: string;
  name?: string;
  roll?: number;
  isPresent?: boolean;
};

type StudentRequired<T, Key extends keyof T> = Required<Omit<T, Key>> & Pick<T, Key>;

type GenericsStudentRequire = StudentRequired<Student, 'name'>;

const student: GenericsStudentRequire = {
  id: 'dsa',
  // name:"sda",
  roll: 45,
  isPresent: true,
};
