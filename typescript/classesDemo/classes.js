var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 创建
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return "".concat(this.name, ":").concat(this.age);
    };
    return Person;
}());
var p = new Person('xiaming', 18);
console.log('创建', p.print());
// 继承
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.tell = function () {
        return "".concat(this.name, ":").concat(this.age);
    };
    return Person1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Student1.prototype.tell = function () {
        return "".concat(this.name, ":").concat(this.age, ":").concat(this.school);
    };
    return Student1;
}(Person1));
var s1 = new Student1('xiaoming', 20, 'zsz');
console.log('继承', s1.tell());
// 访问修饰符
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.print = function () {
        return "".concat(this.name, ":").concat(this.age);
    };
    return People;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Teacher.prototype.print = function () {
        return "".concat(this.name, ":").concat(this.age, ":").concat(this.school);
    };
    return Teacher;
}(People));
var t = new Teacher('teacher', 30, 'zsz');
console.log('访问修饰符', t.print());
// 封装的实现
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this._name;
    };
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName) {
                this._name = newName;
            }
            else {
                console.log('请输入名字');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Hello;
}());
var h = new Hello();
h.name = 'aaaaa';
console.log('封装的实现', h.tell());
// static
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.tell = function () {
        return "".concat(this.name, ":").concat(this.age);
    };
    return Person2;
}());
var p2 = new Person2();
Person2.name = '111';
console.log('static', p2.tell());
