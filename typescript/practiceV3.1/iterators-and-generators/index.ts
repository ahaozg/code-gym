// iterators-and-generators

let comeArray = [1, '123', '12313'];
for (let entry of comeArray) {
    console.log('someArray of', entry);
}

for (let i in comeArray) {
    console.log('someArray in', i)
}

let pets = new Set(['cat', 'dog', 'hamster']);
pets['specries'] = 'mammals';
for (const petsKey in pets) {
    console.log(petsKey);
}
for (const pet of pets) {
    console.log(pet);
}
