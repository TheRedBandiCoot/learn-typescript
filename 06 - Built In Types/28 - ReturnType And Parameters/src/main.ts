function checkLength(a: string, b: number) {
  return a.length >= b;
}

type ReturnTypeOFFunction = ReturnType<typeof checkLength>;

type Params = Parameters<typeof checkLength>;
type ParamsIndex = Parameters<typeof checkLength>[0];

const arr1: Params = ['sa', 5];
const arr2: ParamsIndex = 'sa';
