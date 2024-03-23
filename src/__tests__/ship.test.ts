import Ship from "../modules/ship";

test("Expect ship to have 0 hits by default", () => {
    const carrier = new Ship(5); // length of 5
    expect(carrier.getHits()).toBe(0);
});

test("Expect ship to be floating (not sunk)", () => {
    const carrier = new Ship(5);
    expect(carrier.getSunkStatus()).toBe(false);
});

test("Expect ship of length 5 should be not sunk in 4 hits", () => {
    const carrier = new Ship(5);
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.getSunkStatus()).toBe(false);
});

test("Expect ship of length 5 should be sunk in 5 hits", () => {
    const carrier = new Ship(5);
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.getSunkStatus()).toBe(true);
});

test("Can create ships of various lengths", () => {
    const patrol = new Ship(2);
    expect(patrol.getLength()).toBe(2);
})

test("Can move origin of ship", () => {
    const patrol = new Ship(2, [4, 4]);
    expect(patrol.getOrigin()).toStrictEqual([4, 4]);
})