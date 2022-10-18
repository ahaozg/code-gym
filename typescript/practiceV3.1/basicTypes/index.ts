// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
const name1: string = 'bob';
console.log('name->', name1);

let name2: string = `Gene`;
let age2: number = 37;
let sentence2: string = `Hello, my name is ${name2}, I'll be ${age2 + 1} years old next month.`;

let sentence3: string = "Hello, my name is " + name2 + ".\n\n" +
    "I'll be " + (age2 + 1) + " years old next month.";

// 数组
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

// 元组
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello'];

console.log(x[0].substr(1));
// console.log(x[1].substr(1));

// x[3] = 'world';
// console.log(x[3].toString());
//
// x[6] = true;

// 枚举
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

enum Color1 {Red = 1, Green = 2, Blue = 4}
let c1: Color1 = Color1.Green;

enum Color2 {Red = 1, Green = 2, Blue = 4}
let colorName: string = Color2[2];
console.log('colorName->', colorName);

// 枚举
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let notSure1: any = 4;
notSure1.ifItExists();
notSure1.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();

let list2: any[] = [1, true, 'free'];
list2[1] = 100;

// Void
function warnUser(): void {
  console.log('this is my warning message');
}

let unusable: void = undefined;
let unusable1: void = null;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('something failed');
}

function infiniteLoop(): never {
  while (true) {

  }
}

// Object
declare function create(o: object | null): void;

create({prop: 0});
create(null);
// create(42);
// create('string');

// 类型断言
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

let someValue1: any = 'this is a string';
let strLength1: number = (someValue1 as string).length;


