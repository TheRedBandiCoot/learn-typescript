type Todo = {
  title?: string;
  priority: 'High' | 'Normal' | 'Low' | 'Super Low' | 'extremely Low';
  isCompleted?: boolean;
  description?: string;
  dueData?: Date | string;
};

function extendTodo(todo: Todo) {
  let p1, p2, p3, p4, p5, check: never;
  switch (todo.priority) {
    case 'High':
      p1 = 'H';
      break;
    case 'Normal':
      p2 = 'N';
      break;
    case 'Low':
      p3 = 'L';
      break;
    case 'Super Low':
      p4 = 'SL';
      break;
    // case 'extremely Low':
    //   p5 = 'EL';
    //   break;
    default:
      check = todo.priority;
      console.log(check);
  }
  return p1 || p2 || p3 || p4 || p5 || check;
}

const a = extendTodo({ priority: 'extremely Low' });
a;
