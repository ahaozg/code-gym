// 简单示例
function printLabel1(labelledObj: {label: string}) {
  console.log(labelledObj.label);
}
let myObj1 = {size: 10, label: '1111'};
printLabel1(myObj1);

interface printLabel2 {
  label: string
}

function printLabel2(labelledObj: printLabel2) {
  console.log(labelledObj.label);
}
let myObj2 = {size: 10, label: '2222'};
printLabel2(myObj2);

// 可选属性
interface squareConfig1 {
  color?: string,
  width?: number
}
function createSquare1(config: squareConfig1): {color: string, area: number} {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare1 = createSquare1({color: 'black'});
console.log('mySquare1', mySquare1);

// 只读属性
interface Point1 {
  readonly x: number;
  readonly y: number;
}
let p1: Point1 = {x: 10, y: 29};
// p1.x = 100;

let a1: number[] = [1,2,3,4];
let a2: ReadonlyArray<number> = a1;
// a2[1] = 13;
// a2.push(1);
// a2.length = 100;
// a1 = a2;

// 对象字面量会被特殊对待而且会经过额外的类型检查
// 当将它们赋值给变量或作为函数参数传递时
// 如果一个字面量存在任何"目标类型"不包含的属性时，会得到一个报错
interface SquareConfig2 {
  color?: string,
  width?: number,
  [propName: string]: any
}
function createSquare2(config: SquareConfig2): {color: string, area: number} {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare2 = createSquare2({colour: 'black'});
console.log('mySquare2', mySquare2);

// 函数类型
interface SearchFun1 {
  (source: string, subString: string): boolean
}
let mySearch: SearchFun1;
mySearch = function (sou, sub) {
  return sou.search(sub) > -1;
}

// 可索引类型
interface StringArray {
  [index: number]: string
}
let myArray1: StringArray;
myArray1 = ['bob', 'fred'];
let myStr1:string = myArray1[1];
console.log('myStr1', myStr1);

// 类类型
// 实现接口
interface ClockInterface1 {
  currentDate: Date;
  setTime(d: Date)
}
class Clock1 implements ClockInterface1 {
  currentDate: Date;
  setTime(d: Date) {
    this.currentDate = d;
  }

  constructor(h: number, m: number) {
  }
}


// 接口描述了类的公共部分
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 继承接口
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 混合接口
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 30;
  counter.reset = function () {};
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口继承类
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// // 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }
//
// class Location {
//
// }
