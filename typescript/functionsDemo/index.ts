// 类型
function add1(x: number, y: number): number {
  return x + y;
}
var myAdd1 = function (x: number, y: number): number {
  return x + y;
}

// 完整函数类型
var myAddTs: (name: string, age: number) => number = function (n:string, a: number):number {
  return a;
}

// 可选参数
function buildName1(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}
var result1 = buildName1('bob', 'smith');
var result2 = buildName1('bob');

// 默认参数
function buildName2(firstName: string, lastName = 'smith'): string {
  return firstName + ' ' + lastName;
}
var result3 = buildName2('bob', 'aa');
var result4 = buildName2('bob');
console.log('默认参数', result3, result4);

// 可变参数
function peopleName(firstName:string, ...restOfName:string[]): string {
  return firstName + ' ' + restOfName.join(' ');
}
console.log('可变参数', peopleName('1'));
console.log('可变参数', peopleName('1', '2'));
console.log('可变参数', peopleName('1', '2', '3'));

// Lambda 和 this
var people = {
  name: ['1', '2', '3'],
  getName: function () {
    return () => {
      var i = Math.floor(Math.random() * 4);
      return {
        n: this.name[i]
      }
    }
  }
}
var myName1 = people.getName();
console.log('名字：', myName1().n);

// 重载
function attr(name: string): string;
function attr(age: number): number;
function attr(nameOrAge: any): any {
  if (nameOrAge && typeof nameOrAge === 'string') {
    return '姓名';
  }
  return '年龄';
}
console.log('重载', attr('aa'));
console.log('重载', attr(1));
