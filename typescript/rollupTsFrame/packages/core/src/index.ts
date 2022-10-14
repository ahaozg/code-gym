class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
  test_includes(arr: [], id: string) {
    return arr.filter((i: {id: string}) => i.id === id);
  }
  test_1(arr: []) {
    return Array.from(arr);
  }

  test_2(arr: []) {
    return [...arr]
  }
}

export let sam = new Snake("Sammy the Python");
export let tom: Animal = new Horse("Tommy the Palomino");
