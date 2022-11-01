// 完整函数类型
let myAdd1: (baseValue: number, increment: number) => number = function (x: number, y: number):number {
    return x + y;
}
console.log('myAdd1', myAdd1(1, 1));

// 推断类型
let myAdd2 = function (x: number, y:number): number {
    return x + y;
}
let myAdd3: (baseValue: number, increment: number) => number = function (x,y ) {
    return x + y;
}
console.log('myAdd2', myAdd2(2, 2));
console.log('myAdd3', myAdd3(3, 3));

// 可选参数和默认参数
function buildName1(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}
// console.log('result11', buildName1('Bob'));
// console.log('result11', buildName1('Bob', 'smith', 'a'));
console.log('result11', buildName1('Bob', 'smith'));

function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}
console.log('result21', buildName2('Bob'));
// console.log('result21', buildName2('Bob', 'smith', 'a'));
console.log('result21', buildName2('Bob', 'smith'));

function buildName3(firstName: string, lastName = 'smith') {
    return `${firstName} ${lastName}`;
}
console.log('result31', buildName3('Bob'));
console.log('result31', buildName3('Bob', undefined));
// console.log('result31', buildName3('Bob', 'a', 'b'));
console.log('result31', buildName3('Bob', 'a'));

function buildName4(firstName = 'Bob', lastName: string) {
    return `${firstName} ${lastName}`;
}
// console.log('result41', buildName4('will'));
console.log('result41', buildName4('will', '123'));
// console.log('result41', buildName4('will', '123', '12'));
console.log('result41', buildName4(undefined, 'smith'));

// 剩余参数
function buildName5(firstName: string, ...restOfNames: string[]) {
    return `${firstName} ${restOfNames.join(' ')}`;
}
let buildName5Fun: (fName: string, ...rest: string[]) => string = buildName5;
console.log('buildName5', buildName5('1', '2', '3', '4', '5'));
console.log('buildName5Fun', buildName5('1', '2', '3', '4', '5'));

// this
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
// 此时 cardPicker中的this是window. 严格模式下是undefined
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

let deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck2: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker2();
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
// class Handler {
//     info: any;
//     onClickBad(this: Handler, e: Event) {
//         // oops, used this here. using this callback would crash at runtime
//         this.info = e;
//     }
// }
class Handler {
    info: any;
    onClickGood = (e: Event) => { this.info = e }
}
let h = new Handler();
let uiElement: UIElement = {
    addClickListener(onclick: (this: void, e: Event) => void) {
        console.log('onclick', onclick);
    }
}
uiElement.addClickListener(h.onClickGood);


// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string, card: number}[]): number;
function pickCard(x: number): {suit: string, card: number};
function pickCard(x): any {
    if (typeof x === 'object') {
        return Math.floor(Math.random() * x.length);
    } else if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard3 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);
let pickedCard4 = pickCard(15);
console.log("card: " + pickedCard4.card + " of " + pickedCard4.suit);
