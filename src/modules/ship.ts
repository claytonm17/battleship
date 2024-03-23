class Ship {

    length : number;
    hits : number;
    sunk : boolean;
    origin : [number, number];
    rotated : boolean; 

    constructor(
        length : number, 
        origin : [number, number] = [0, 0], // X,Y
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

    // For testing
    getHits() {
        return this.hits;
    }
    getSunkStatus() {
        return this.sunk;
    }
    getLength() {
        return this.length;
    }
    getOrigin() {
        return this.origin;
    }

    // Need to make this a function that return true IF coords are held by ship
    isHit(x: number, y: number): boolean {
        const [shipX, shipY] = this.origin;

        if (this.rotated) {
            return y === shipY && x >= shipX && x < shipX + this.length;
        } else {
            return x === shipX && y >= shipY && y < shipY + this.length;
        }
    }

    hit(): boolean {
        this.hits += 1;
        //console.log(`Ship Length ${this.length} was hit!`);
        if (this.hits === this.length) {
            this.isSunk();
            return true;
        } 
        return false;
    }

    isSunk(): void {
        this.sunk = true;
    }
}

export default Ship;