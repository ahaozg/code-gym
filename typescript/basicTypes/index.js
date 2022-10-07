// Boolean
var isBoolean = false;
console.log('isBoolean', isBoolean);
// Number
var isNumber = 1;
console.log('isNumber1', isNumber);
isNumber++;
console.log('isNumber2', isNumber);
// String
var str = 'bob';
console.log('str1', str);
str = 'bob2';
console.log('str2', str);
// Array
var list1 = [1, 2, '3'];
var list2 = [1, '2', 3];
console.log('list1', list1);
console.log('list2', list2);
// Enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var colorName1 = Color1['2'];
console.log('colorName1', colorName1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var colorName2 = Color2.Green;
console.log('colorName2', colorName2);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var colorName3 = Color3.Green;
console.log('colorName3', colorName3);
// Any
var any = '123';
any = 'haha';
console.log('any', any);
var listAny = [1, 'hello', false];
console.log('listAny', listAny);
// Void
function stringFun() {
    return '11';
}
function voidFun() {
}
