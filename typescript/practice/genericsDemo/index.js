// 泛型
function Hello(num) {
    return num;
}
function Hello1(arg) {
    return arg;
}
console.log('hello1', Hello1(100));
console.log('hello1', Hello1('str'));
// 使用泛型
function Hello2(num) {
    console.log('属性', num.length);
    return num;
}
console.log('hello2', Hello2(['1', '2', '3']));
// 泛型类型
function Hello3(arg) {
    return arg;
}
var myHello3 = Hello3;
console.log('hello3', myHello3('hello3'));
var myHello31 = Hello3;
console.log('myHello31', myHello31('hello31'));
function myHello4(arg) {
    return arg;
}
var MH4 = myHello4;
console.log('hello4', MH4('hello4'));
function myHello5(arg) {
    return arg;
}
var MH5 = myHello5;
console.log('hello5', MH5(100));
// 泛型类
var HelloNumber = /** @class */ (function () {
    function HelloNumber() {
    }
    return HelloNumber;
}());
var myHelloNumber = new HelloNumber();
myHelloNumber.zero = 0;
myHelloNumber.add = function (x, y) {
    return x + y;
};
console.log('myHelloNumber', myHelloNumber.zero, myHelloNumber.add(1, 2));
