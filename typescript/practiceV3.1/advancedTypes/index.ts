// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) {}
}
interface Loggable {
    log(): void
}
class ConsoleLoggable implements Loggable {
    log() {
        console.log('log', this)
    }
}
var jim = extend(new Person('123'), new ConsoleLoggable());
var n = jim.name;
jim.log();
console.log('n', jim, n);


// 联合类型
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, get '${padding}'`);
}
padLeft('asd', '123');

interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}
class ClassBird implements Bird {
    fly() {
        console.log('bird-fly');
    }
    layEggs() {
        console.log('bird-layEggs');
    }
}
class ClassFish implements Fish {
    swim() {
        console.log('fish-swim');
    }
    layEggs() {
        console.log('fish-layEggs');
    }
}
function getSmallPet(): Fish | Bird {
    return Math.random() < 0.5 ? new ClassBird() : new ClassFish();
}
let pet = getSmallPet();
pet.layEggs();

// 类型保护和区分类型
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
} else {
    (<Bird>pet).fly();
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

// typeof 类型保护
function padLeft1(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join('z') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, get '${padding}'`);
}
console.log('padLeft1', padLeft1('aaa', 2));

// Instanceof 类型保护
interface Padder {
    getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}

    getPaddingString(): string {
        return Array(this.numSpaces + 1).join(' ');
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString(): string {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder(' ');
}
let padder: Padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder;
    console.log('padder1', padder);
}
if (padder instanceof StringPadder) {
    padder;
    console.log('padder2', padder);
}

// 可以为null的类型
let s = 'foo';
s = null;
let sn: string | number = 'bar';
sn = null;
sn = undefined;

function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}
console.log('broken-abc', broken('abc'));
console.log('broken-null', broken(null));
console.log('fixed-abc', fixed('abc'));
console.log('fixed-null', fixed(null));

// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

type Container<T> = { value: T };
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
// type LinkedList<T> = T & { next: LinkedList<T> };
//
// interface Person {
//     name: string;
// }
//
// var people: LinkedList<Person>;
// console.log('perple', people);
// var s1 = people.name;
// var s2 = people.next.name;
// var s3 = people.next.next.name;
// var s4 = people.next.next.next.name;
// console.log('s1', s1);
// console.log('s2', s2);
// console.log('s3', s3);
// console.log('s4', s4);

// 可辨识联合
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

// 完整性检查
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
interface Triangle {
    kind: "triangle";
    radius: number;
}
type Shape1 = Square | Rectangle | Circle | Triangle;
function area1(s: Shape1) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        case "triangle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}

// 索引类型
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
pluck(person, ['age', 'name']); // error, 'unknown' is not in 'name' | 'age'

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

let name1: string = getProperty(person, 'name');
let age: number = getProperty(person, 'age');
// let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number

// 映射类型
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

type T02 = Exclude<string | number | (() => void), Function>;  // string | number
type T03 = Extract<string | number | (() => void), Function>;  // () => void

type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

function f1(s: string) {
    return { a: 1, b: s };
}

class C {
    x = 0;
    y = 0;
}

type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // any
// type T17 = ReturnType<string>;  // Error
// type T18 = ReturnType<Function>;  // Error

type T20 = InstanceType<typeof C>;  // C
type T21 = InstanceType<any>;  // any
type T22 = InstanceType<never>;  // any
// type T23 = InstanceType<string>;  // Error
// type T24 = InstanceType<Function>;  // Error






