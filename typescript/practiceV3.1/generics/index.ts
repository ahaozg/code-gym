// 类型变量
function identity1<T>(arg: T): T {
    return arg;
}

let output1 = identity1<string>('haha');
let output2 = identity1('haha');

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log('arg.length', arg.length)
    return arg;
}

// 泛型类型
let myIdentity1: <T>(arg: T) => T = identity1;
let myIdentity2: <U>(arg: U) => U = identity1;
let myIdentity3: {<T>(arg: T): T} = identity1;


// 泛型接口
interface GenericIdentityFn1 {
    <T>(arg: T): T
}
function identity2<T>(arg: T): T {
    return arg;
}
let myIdentity4: GenericIdentityFn1 = identity2;

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
function identity3<T>(arg: T): T {
    return arg;
}
let myIdentity5: GenericIdentityFn2<string> = identity3;

// 泛型类
class GenericNumber1<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber1 = new GenericNumber1<number>();
myGenericNumber1.zeroValue = 0;
myGenericNumber1.add = (x, y) => x+y;
console.log('myGnenricNumber', myGenericNumber1.add(1, 2));

let myGenericNumber2 = new GenericNumber1<string>();
myGenericNumber2.zeroValue = '';
myGenericNumber2.add = (x, y) => x + y;
console.log('myGenericString', myGenericNumber2.add('hello', 'world'));

// 泛型约束
interface LengthWish {
    length: number;
}
function loggingIdentity2<T extends LengthWish>(arg: T): T {
    console.log('arg.length', arg.length);
    return arg;
}
loggingIdentity2({length: 1, value: 1});

// 在泛型约束中使用类型参数
// function getProp(obj: T, key: K) {
//     return obj[key];
// }
// let x = {a:1, b:2, c: 3, d:4};
// getProp(x, 'a');
// getProp(x, 'm');

// 在泛型里使用类类型
function create<T>(c: {new(): T}): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nameTag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
