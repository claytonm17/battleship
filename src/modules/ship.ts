class Ship {
    length: number;
    health: number;
    origin: [number, number];
    direction: string; // "V" or "H"
    sunk: boolean;

    constructor(
        length: number, 
        origin: [number, number],
        direction: string = "V",
        sunk: boolean = false, // not sunk by default
    ) {
        this.length = length;
        this.health = length;
        this.origin = origin;
        this.direction = direction;
        this.sunk = sunk;
    }

    // Decreases the health of the ship
    hit() {
        this.health -= 1;
    }

    isSunk() {
        if (this.health === 0) {
            this.sunk = true;
            return this.sunk;
        }
        return this.sunk;
    }
}

export default Ship;