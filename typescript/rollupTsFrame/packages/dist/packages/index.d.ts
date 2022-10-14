declare class Animal {
    name: string;
    constructor(theName: string);
    move(distanceInMeters?: number): void;
}
declare class Snake extends Animal {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
export declare let sam: Snake;
export declare let tom: Animal;
export {};
//# sourceMappingURL=index.d.ts.map