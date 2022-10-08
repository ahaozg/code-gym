// 类型
function add1(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) {
    return x + y;
};
// 完整函数类型
var myAddTs = function (n, a) {
    return a;
};
// 可选参数
function buildName1(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
var result1 = buildName1('bob', 'smith');
var result2 = buildName1('bob');
// 默认参数
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'smith'; }
    return firstName + ' ' + lastName;
}
var result3 = buildName2('bob', 'aa');
var result4 = buildName2('bob');
console.log('默认参数', result3, result4);
// 可变参数
function peopleName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
console.log('可变参数', peopleName('1'));
console.log('可变参数', peopleName('1', '2'));
console.log('可变参数', peopleName('1', '2', '3'));
// Lambda 和 this
var people = {
    name: ['1', '2', '3'],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myName1 = people.getName();
console.log('名字：', myName1().n);
function attr(nameOrAge) {
    if (nameOrAge && typeof nameOrAge === 'string') {
        return '姓名';
    }
    return '年龄';
}
console.log('重载', attr('aa'));
console.log('重载', attr(1));
