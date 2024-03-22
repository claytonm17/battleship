import Gameboard from "../modules/gameboard";

test("Expect default gameboard to be 10x10 grid of false", () => {
    const grid = new Gameboard;
    expect(grid.board).toStrictEqual(
        [
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
        ]
    )
})

test("Should be able to place a ship on the board with origin of [0,0]", () => {
    const grid = new Gameboard;
    grid.placeShip(5, [0, 0], true)
    expect(grid.board).toStrictEqual(
        [
            [true, true, true, true, true, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
        ]
    )
})

test("Should be able to place a ship on the board with origin of [0,0] on the y axis", () => {
    const grid = new Gameboard;
    grid.placeShip(4, [0, 0], false)
    expect(grid.board).toStrictEqual(
        [
            [true, false, false, false, false, false, false, false, false, false],
            [true, false, false, false, false, false, false, false, false, false],
            [true, false, false, false, false, false, false, false, false, false],
            [true, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
        ]
    )
})

test("Should be able to place a ship on the board with a different origin on the y axis", () => {
    const grid = new Gameboard;
    grid.placeShip(3, [4, 6], false)
    console.log(grid.board)
    expect(grid.board).toStrictEqual(
        [
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, true, false, false, false],
            [false, false, false, false, false, false, true, false, false, false],
            [false, false, false, false, false, false, true, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
        ]
    )
})