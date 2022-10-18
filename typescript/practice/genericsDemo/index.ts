// 泛型
function Hello(num: number): number {
  return  num;
}
function Hello1<T>(arg: T): T {
  return arg;
}
console.log('hello1', Hello1<number>(100));
console.log('hello1', Hello1<string>('str'));

// 使用泛型
function Hello2<T>(num: T[]): T[] {
  console.log('属性', num.length);
  return num;
}
console.log('hello2', Hello2<string>(['1', '2', '3']));

// 泛型类型
function Hello3<T>(arg: T): T {
  return arg;
}
var myHello3: <K>(arg: K) => K = Hello3;
console.log('hello3', myHello3('hello3'));
var myHello31: {<T>(arg: T): T} = Hello3;
console.log('myHello31', myHello31('hello31'));

interface Hello4 {
  <T>(arg: T): T;
}
function myHello4<T>(arg: T): T {
  return arg;
}
var MH4: Hello4 = myHello4;
console.log('hello4', MH4<String>('hello4'));

interface Hello5<T> {
  (arg: T): T;
}
function myHello5<T>(arg: T): T {
  return arg;
}
var MH5: Hello5<number> = myHello5;
console.log('hello5', MH5(100));

// 泛型类
class HelloNumber<T> {
  zero: T;
  add: (x: T, y: T) => T;
}
var myHelloNumber = new HelloNumber<number>();
myHelloNumber.zero = 0;
myHelloNumber.add = function (x, y) {
  return x + y;
}
console.log('myHelloNumber', myHelloNumber.zero, myHelloNumber.add(1, 2));
