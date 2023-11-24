//@ Html Elements
// const input = document.querySelector<HTMLInputElement>('.input');

// console.log(input?.value);

// function arrIndexReturns(arr: (number | string | boolean)[]) {
//   return arr[1];

//@ functions
function arrIndexReturns<ArrayType>(arr: ArrayType[]) {
  return arr[1];
}

const arr1 = [1, 2, 3];
const arr2 = ['One', 'Two', false];
const arr3 = [true, false];

const returnOne = arrIndexReturns<number>(arr1);
const returnTwo = arrIndexReturns(arr2);
const returnThree = arrIndexReturns(arr3);

returnOne;
returnTwo;
returnThree;

//@ Set

const setStr = new Set<string>(['DSa', 'Dsa']);
setStr.add('adwd');
setStr.add(true);
setStr;

const setNum = new Set([1, 5, 8]);
setNum.add(79);
setNum;

//@ Map
const mapStr = new Map<string, string>([['name', 'Sandy']]);
const mapNum = new Map<string, number>([['name', 'Sandy']]);
const map = new Map([['name', false]]);

map;

map.set('name', true);
