// 类
class greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greet1 = new greeter1('111');
console.log('greet1', greet1);

// 继承
class Animal1 {
    move(distanceInMeters: number = 0) {
        console.log(`distance in meters: ${distanceInMeters}`);
    }
}
class Dog1 extends Animal1 {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog1 = new Dog1();
dog1.bark();
dog1.move(10);
dog1.bark();

class Animal2 {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake1 extends Animal2 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse1 extends Animal2 {
    constructor(props) {
        super(props);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam1 = new Snake1('Sammy the Python');
let tom: Animal2 = new Horse1('Tommy the Palomino');
sam1.move(10);
tom.move(20);

// 公共、私有、受保护的修饰符
// public
class Animal3 {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters) {
        console.log('distanceInMeters', distanceInMeters);
    }
}
// private
class Animal4 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
// new Animal4('a').name;
class Animal5 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhino1 extends Animal5 {
    constructor(name) {
        super(name);
    }
}
class Employee1 extends Animal5 {
    private name: string;
    constructor(props) {
        super(props);
    }
}
let animal5 = new Animal5('1');
let rhino1 = new Rhino1('2');
let employee = new Employee1('3');

animal5 = rhino1;
// animal5 = employee;
// protected
class Person1 {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}
class Employee2 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard1 = new Employee2("Howard", "Sales");
console.log(howard1.getElevatorPitch());
// console.log(howard1.name);
// console.log(howard1.department);
// let person1 = new Person1()


// readonly
class Octopus1 {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad1 = new Octopus1('hahahha');
// dad1.name = '12e'
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

// 存取器
let password = 'secret passcode';
class Employee3 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (password && password === 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}
let employee3 = new Employee3();
employee3.fullName = 'Bob Smith';
console.log('employee3.fullName', employee3.fullName);

// 静态属性
class Grid1 {
    static origin = {x: 10, y: 10};
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = (point.x - Grid1.origin.x);
        let yDist = (point.y - Grid1.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {
    }
}
let grid1 = new Grid1(1);
let grid2 = new Grid1(5);
console.log(grid1.calculateDistanceFromOrigin({x: 20, y: 20}));
console.log(grid2.calculateDistanceFromOrigin({x: 20, y: 20}));


// 抽象类
abstract class Department {
    constructor(public name: string) {
    }
    printName() {
        console.log('printName', this.name);
    }
    abstract printMeeting(): void;
}
class AccountingDepartment extends Department {
    constructor(props) {
        super(props);
    }
    printMeeting():void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}
let department: Department;
department = new AccountingDepartment('AccountingDepartment');
department.printMeeting();
department.printName();
// department.generateReports();

// 构造函数
class Greeter1 {
    static standardGreeting = 'Hello, there';
    greeting: string;
    greet() {
        if (this.greeting) {
            return `Hello。 ${this.greeting};`
        } else {
            return Greeter1.standardGreeting;
        }
    }
}
let greeter2: Greeter1;
greeter2 = new Greeter1();
console.log('greeter2', greeter2.greet());

let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting = 'Hey there!';

let greeter3: Greeter1 = new greeterMaker();
console.log('greeter3', greeter3.greet());

// 把类当做接口使用
class Point1 {
    x: number;
    y: number;
}
interface Point3d extends Point1 {
    z: number
}
let point3d: Point3d = {x: 10, y: 10, z: 10};
