import Ship from "../modules/ship";

test("Expect ship to have 0 hits by default", () => {
    const carrier = new Ship(5); // length of 5
    expect(carrier.hits).toBe(0);
});

test("Expect ship to be floating (not sunk)", () => {
    const carrier = new Ship(5);
    expect(carrier.sunk).toBe(false);
});

test("Expect ship of length 5 should be not sunk in 4 hits", () => {
    const carrier = new Ship(5);
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.sunk).toBe(false);
});

test("Expect ship of length 5 should be sunk in 5 hits", () => {
    const carrier = new Ship(5);
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.sunk).toBe(true);
});

test("Can create ships of various lengths", () => {
    const patrol = new Ship(2);
    expect(patrol.length).toBe(2);
})

test("Can move origin of ship", () => {
    const patrol = new Ship(2, [4, 4]);
    expect(patrol.origin).toStrictEqual([4, 4]);
})