type Todo = {
  title: string;
  dueDate?: Date | string;
  isComplete: boolean;
};

const todo = {
  title: 'sdf',
  dueDate: new Date(),
  isComplete: true,
} satisfies Todo;

// if (todo.dueDate instanceof Date) {
//   todo.dueDate?.setDate(4);
// }

const a = todo.dueDate.setDate(4);
a;
