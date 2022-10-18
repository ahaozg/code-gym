// 布尔值
var isDone = false;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var name1 = 'bob';
console.log('name->', name1);
var name2 = "Gene";
var age2 = 37;
var sentence2 = "Hello, my name is ".concat(name2, ", I'll be ").concat(age2 + 1, " years old next month.");
var sentence3 = "Hello, my name is " + name2 + ".\n\n" +
    "I'll be " + (age2 + 1) + " years old next month.";
// 数组
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// 元组
var x;
x = ['hello', 10];
// x = [10, 'hello'];
console.log(x[0].substr(1));
// console.log(x[1].substr(1));
// x[3] = 'world';
// console.log(x[3].toString());
//
// x[6] = true;
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color2[2];
console.log('colorName->', colorName);
// 枚举
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var notSure1 = 4;
notSure1.ifItExists();
notSure1.toFixed();
var prettySure = 4;
// prettySure.toFixed();
var list2 = [1, true, 'free'];
list2[1] = 100;
// Void
function warnUser() {
    console.log('this is my warning message');
}
var unusable = undefined;
var unusable1 = null;
// Null 和 Undefined
var u = undefined;
var n = null;
// Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// create(42);
// create('string');
// 类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
var someValue1 = 'this is a string';
var strLength1 = someValue1.length;
