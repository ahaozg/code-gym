// Boolean
var isBoolean:boolean = false;
console.log('isBoolean', isBoolean);

// Number
var isNumber:number = 1;
console.log('isNumber1', isNumber);
isNumber++;
console.log('isNumber2', isNumber);

// String
var str:string = 'bob';
console.log('str1', str);
str = 'bob2';
console.log('str2', str);

// Array
var list1:(number | string)[] = [1, 2, '3'];
var list2:Array<number | string> = [1, '2', 3];
console.log('list1', list1);
console.log('list2', list2 );

// Enum

enum Color1 {Red, Green, Blue}
var colorName1: string = Color1['2'];
console.log('colorName1', colorName1);
enum Color2 {Red = 1, Green, Blue}
var colorName2: Color2 = Color2.Green;
console.log('colorName2', colorName2);
enum Color3 {Red = 1, Green = 2, Blue = 4}
var colorName3: Color3 = Color3.Green;
console.log('colorName3', colorName3);

// Any
var any: any = '123';
any = 'haha';
console.log('any', any);
var listAny: any[] = [1, 'hello', false];
console.log('listAny', listAny);

// Void
function stringFun(): string {
  return '11';
}
function voidFun(): void {

}
