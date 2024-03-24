import Gameboard from "../modules/gameboard";
import Player from "../modules/player";

test("Gameboard should be initialized with no hits", () => {
    const pboard = new Gameboard;
    const player = new Player('human', pboard);
    expect(player.board.attackedSpots).toStrictEqual([]);
})

test("Player can place ship in specific spot", () => {
    const pboard = new Gameboard;
    const player = new Player('human', pboard);
    player.board.placeShip(5, [1, 2], true); // Length 5, origin [1,2], X axis
    expect(player.board.board).toStrictEqual(
        [
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, true, true, true, true, true, false, false, false, false],
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

test("Two players can both place ships on their boards", () => {
    const pboard = new Gameboard;
    const cboard = new Gameboard;
    const player = new Player('Human', pboard);
    const computer = new Player('Computer', cboard);

    player.board.placeShip(5, [1, 2], true);
    computer.board.placeShip(3, [0,0], false);

    expect(player.board.board).toStrictEqual(
        [
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, true, true, true, true, true, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false],
        ]
    )
    expect(computer.board.board).toStrictEqual(
        [
            [true, false, false, false, false, false, false, false, false, false],
            [true, false, false, false, false, false, false, false, false, false],
            [true, false, false, false, false, false, false, false, false, false],
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

test("Player can place ship then have it attacked by computer", () => {
    const pboard = new Gameboard;
    const cboard = new Gameboard;
    const player = new Player('human', pboard);
    const computer = new Player('Computer', cboard);

    player.board.placeShip(3, [0,2], true);
    computer.board.placeShip(2, [0,0], true);

    const pAttack = player.randomAttack();
    const cAttack = computer.manualAttack(0, 2);

    computer.board.receiveAttack(pAttack[0], pAttack[1]);
    expect(player.board.receiveAttack(cAttack[0], cAttack[1])).toBe(true);
})

test('randomAttack does not attack the same place twice', () => {
    const cboard = new Gameboard;
    const computer = new Player("CPU", cboard);
    const attackedCoordinates: string[] = [];

    for (let i = 0; i < 100; i++) {
        const [x, y] = computer.randomAttack();
        const coordinate = `${x},${y}`;
        
        expect(attackedCoordinates).not.toContain(coordinate);
        
        attackedCoordinates.push(coordinate);
    }
});