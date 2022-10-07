// 创建
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  print() {
    return `${this.name}:${this.age}`;
  }
}

var p = new Person('xiaming', 18);
console.log('创建', p.print());

// 继承
class Person1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  tell() {
    return `${this.name}:${this.age}`;
  }
}
class Student1 extends Person1 {
  school: string;
  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school;
  }
  tell() {
    return `${this.name}:${this.age}:${this.school}`;
  }
}
var s1 = new Student1('xiaoming', 20, 'zsz');
console.log('继承', s1.tell());

// 访问修饰符
class People {
  name: string;
  age: number;

  constructor(name:string, age: number) {
    this.name = name;
    this.age = age;
  }

  print() {
    return `${this.name}:${this.age}`;
  }
}
class Teacher extends People {
  constructor(name:string, age: number, private school: string) {
    super(name, age);
  }
  print() {
    return `${this.name}:${this.age}:${this.school}`;
  }
}
var t = new Teacher('teacher', 30, 'zsz');
console.log('访问修饰符', t.print());

// 封装的实现
class Hello {
  private _name: string;
  tell() {
    return this._name;
  }
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    if (newName) {
      this._name = newName;
    } else {
      console.log('请输入名字');
    }
  }
}
var h = new Hello();
h.name = 'aaaaa';
console.log('封装的实现', h.tell());

// static
class Person2 {
  static name: string;
  age: number;

  tell() {
    return `${this.name}:${this.age}`;
  }
}
var p2 = new Person2();
Person2.name = '111';
console.log('static', p2.tell());

