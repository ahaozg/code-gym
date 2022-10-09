// 创建接口
function printLabel1(labelObj: {label: string}) {
  console.log(labelObj.label);
}
const myObj1 = {label: 'hello'};
printLabel1(myObj1);

interface LabelValue1 {
  label: string;
}
function printLabel2(labelObj: LabelValue1) {
  console.log(labelObj.label);
}
const myObj2 = {label: 'world'};
printLabel2(myObj2);

// 可选属性
interface USB {
  name: string;
  age?: number;
}
function printUSB(pu: USB) {
  console.log(pu.name, pu.age);
}
const myObj3 = {name:'bob'};
printUSB(myObj3);

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function (sour: string, substr: string) {
  const result = sour.search(substr);
  return result !== -1
}

// 数组类型
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['bob', 'smith'];
console.log('myArray', myArray[0], myArray[1]);

// class类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number, s: number) {
  }
}

// 接口继承与混合类型
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let s = <Square>{};
s.color = 'blue';
s.penWidth = 10;
s.sideLength = 10;

interface Counter {
  interval: number;
  reset(): void;
  (start: number): string;
}
let c: Counter;
c(10);
c.reset();
