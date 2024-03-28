import parseCoordinates from "../modules/index";

test("Can change input coordinates", () => {
    expect(parseCoordinates("A1")).toStrictEqual([0,0]);
    expect(parseCoordinates("B4")).toStrictEqual([3,1]);
    expect(parseCoordinates("J10")).toStrictEqual([9,9]);
});

test("Game win condition", () => {
    expect(gameWinCondition())
});