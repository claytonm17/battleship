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
    grid.placeShip(3, [6, 4], false)
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

test("Should be able to place multiple ships on the grid", () => {
    const grid = new Gameboard;
    grid.placeShip(5, [1, 3], false);
    grid.placeShip(4, [9, 1], false);
    grid.placeShip(3, [3, 3], true);
    grid.placeShip(3, [4, 0], true);
    grid.placeShip(2, [8, 8], false);
    expect(grid.board).toStrictEqual(
        [
            [false, false, false, false, true, true, true, false, false, false],
            [false, false, false, false, false, false, false, false, false, true],
            [false, false, false, false, false, false, false, false, false, true],
            [false, true, false, true, true, true, false, false, false, true],
            [false, true, false, false, false, false, false, false, false, true],
            [false, true, false, false, false, false, false, false, false, false],
            [false, true, false, false, false, false, false, false, false, false],
            [false, true, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, true, false],
            [false, false, false, false, false, false, false, false, true, false],
        ]
    )
})

test("Be able to place a ship then hit it and not sink it", () => {
    const playerBoard = new Gameboard;
    playerBoard.placeShip(2, [1, 1], true); // Place ship at 1,1 length 2 on X axis

    const turn = playerBoard.receiveAttack(2, 1); // recieve attack at 2,1
    expect(turn).toBe(true);
    expect(playerBoard.ships[0].sunk).toBe(false);
})

test("Be able to place a ship then hit it and sink it", () => {
    const playerBoard = new Gameboard;
    playerBoard.placeShip(2, [1, 1], true); // Place ship at 1,1 length 2 on X axis

    playerBoard.receiveAttack(2, 1); // recieve attack at 2,1
    playerBoard.receiveAttack(1, 1);
    expect(playerBoard.ships[0].sunk).toBe(true); 
})

test("Be able to place a ship but not be able to hit the same place twice", () => {
    const playerBoard = new Gameboard;
    playerBoard.placeShip(2, [1, 1], true); // Place ship at 1,1 length 2 on X axis

    expect(playerBoard.receiveAttack(2, 1)).toBe(true); // recieve attack at 2,1
    expect(playerBoard.receiveAttack(2, 1)).toBe(null);  // Should have a stop here
    expect(playerBoard.ships[0].sunk).toBe(false); // should not be sunk
    expect(playerBoard.receiveAttack(1,1)).toBe(true);
    expect(playerBoard.ships[0].sunk).toBe(true);
})
