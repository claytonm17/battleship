class Ship {
    length : number;
    hits : number;
    sunk : boolean;

    constructor(
        length : number, 
        hits : number = 0, 
        sunk : boolean = false
        ) {
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
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