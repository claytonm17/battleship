class Ship {
    id: number; // 1 - 5 indicating which ship
    length: number;
    health: number;
    origin: [number, number]; // [X, Y]
    direction: string; // "V" or "H"
    sunk: boolean;

    constructor(
        id: number,
        length: number, 
        origin: [number, number], // Will always be going top to bottom or left to right
        direction: string = "V",
        sunk: boolean = false, // not sunk by default
    ) {
        this.id = id;
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