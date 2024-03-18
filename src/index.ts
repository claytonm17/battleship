class Ship {
    length : number;
    hits : number;
    sunk : boolean;

    hit() {
        this.hits += 1;
        if (this.hits === this.length) this.isSunk();
    }

    isSunk() {
        this.sunk = true;
    }
}

const carrier = new Ship;
carrier.length = 5;
carrier.hits = 0;
carrier.sunk = false;