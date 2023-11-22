function printNameAndAge(name: string, age: number, options?: { isProgrammer: boolean }) {
  console.log(name, age, `IsProgrammer: ${options ? options.isProgrammer : 'NA'}`);
}

printNameAndAge('John', 23);
printNameAndAge('Kyle', 23, { isProgrammer: true });
