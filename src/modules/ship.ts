class Ship {
    length : number;
    hits : number;
    sunk : boolean;
    origin : [number, number];
    rotated : boolean; 

    constructor(
        length : number, 
        origin : [number, number] = [0, 0], // x,y
        rotated : boolean = true, // TRUE = x axis, false = y axis
        hits : number = 0, 
        sunk : boolean = false,
        ) {

        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
        this.origin = origin;
        this.rotated = rotated;
    }

    hit() {
        this.hits += 1;
        if (this.hits === this.length) this.isSunk();
    }

    isSunk() {
        this.sunk = true;
    }
}

export default Ship;