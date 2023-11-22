type Options = {
  isProgrammer?: boolean;
  indentLevel?: number;
};

// function func(name,{debugMode = false} = {}){
//   console.log(name,debugMode);
// }

function printNameAndDebug(name: string, { isProgrammer = false, indentLevel = 1 }: Options = {}) {
  console.log(name, isProgrammer, indentLevel);
}

printNameAndDebug('John', { indentLevel: 5 });
printNameAndDebug('Kyle', { isProgrammer: true });

function addNum(...nums: number[]) {
  return; //rest code
}

addNum(1, 2, 3);
addNum(1, 2, 3, 4, 5, 6);
