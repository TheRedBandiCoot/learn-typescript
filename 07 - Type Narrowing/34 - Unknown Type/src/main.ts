function func(data: unknown) {
  if (data != null && typeof data === 'object' && 'name' in data && typeof data.name === 'string') {
    console.log(data.name.length);
  }
}

//@ GPT Code
// function hasName(value: unknown): value is { name: string } {
//   return value != null && typeof value === 'object' && 'name' in value;
// }

// function func(data: unknown) {
//   if (hasName(data)) {
//     console.log(data.name);
//   }
// }
