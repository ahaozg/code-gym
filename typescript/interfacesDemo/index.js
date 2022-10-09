// 创建接口
function printLabel1(labelObj) {
    console.log(labelObj.label);
}
var myObj1 = { label: 'hello' };
printLabel1(myObj1);
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
var myObj2 = { label: 'world' };
printLabel2(myObj2);
function printUSB(pu) {
    console.log(pu.name, pu.age);
}
var myObj3 = { name: 'bob' };
printUSB(myObj3);
var mySearch;
mySearch = function (sour, substr) {
    var result = sour.search(substr);
    return result !== -1;
};
var myArray;
myArray = ['bob', 'smith'];
console.log('myArray', myArray[0], myArray[1]);
// class类型
// 接口继承与混合类型
