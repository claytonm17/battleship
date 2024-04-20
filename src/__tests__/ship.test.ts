import Ship from "../modules/ship";

test("Expect ship to have 0 hits by default and to not be sunk", () => {
    const carrier = new Ship(1, 5, [0,0]);
    expect(carrier.length).toBe(5);
    expect(carrier.sunk).toBe(false);
});

test("Expect ship to have lower health when hit", () => {
    const battleship = new Ship(2, 4, [1,3]);
    battleship.hit();
    expect(battleship.health).toBe(3);
});

test("Expect ship to not be sunk after being hit once", () => {
    const lightCruiser = new Ship(5, 2, [1,3]);
    lightCruiser.hit();
    expect(lightCruiser.sunk).toBe(false);
});

test("Expect ship to be sunk after being hit full length", () => {
    const battleship = new Ship(2, 4, [1,3]);
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();   
    expect(battleship.isSunk()).toBe(true);
});