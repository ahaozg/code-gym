// symbols
let sym1 = Symbol();

let sym2 = Symbol('key');

let sym3 = Symbol('key');

console.log(sym2 === sym3);

let sym = Symbol();
let obj = {
    [sym]: 'value'
}
console.log(obj[sym]);

const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol]() {
        return 'C';
    }
}
let c = new C();
let className = c[getClassNameSymbol]();
console.log('className', className);
