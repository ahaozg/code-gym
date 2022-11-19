// 数字枚举
enum Direction {
    up= 1,
    right,
    down,
    left
}

enum Response1 {
    No=0,
    Yes=1
}
function respond(recipient: string, message: Response1): void {
    // ...
}
respond('123123', Response1.Yes);

// 字符串枚举
enum Direction1 {
    UP= 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

// 异构枚举
enum BooleanLikeHeterogeneousEnum {
    NO = 0,
    YES = 'YES'
}

// 计算的和常量成员
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G= '123'.length
}

// 联合枚举与枚举成员的类型
enum ShapeKind {
    Circle,
    Square
}
interface Circle {
    kind: ShapeKind.Circle,
    radius: number
}
interface Square {
    kind: ShapeKind.Square,
    sideLength: number
}
let c: Circle = {
    kind: ShapeKind.Circle,
    radius: 100
}

enum E {
    Foo,
    Bar
}
function f(x: E) {
    if (x !== E.Foo) {

    }
}

// 运行时枚举
enum E1 {
    X, Y, Z
}
function f1(obj: {X: number}) {
    return obj.X;
}
f1(E1);

// 反向映射
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a];
console.log('a', a, nameOfA)

// const 枚举
const enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
let directions = [Directions.DOWN, Directions.UP, Directions.LEFT, Directions.RIGHT];
console.log('directions', directions);

// 外部枚举
declare enum Enum2 {
    A = 1,
    B,
    C = 2
}





