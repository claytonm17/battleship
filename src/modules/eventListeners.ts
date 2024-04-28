import Player from "./player";

const eventListeners = {

    nameFormListener: (): Promise<Player> => {
        return new Promise((resolve, reject) => {
            const textInput = document.querySelector("#name") as HTMLInputElement;
            const form = document.querySelector(".player-name-form") as HTMLFormElement;

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const playerName = textInput.value;
                const humanPlayer = new Player(playerName);

                // Pass on humanPlayer to start game loop

                console.log(`Created player for ${playerName}`);
                resolve(humanPlayer);
            })
        })
    },

    placeShipBoardListener: () => {
        // Will accept origin to click -> place ship on that spot (V or H)
        /*return new Promise((resolve, reject) => {
            return
        })*/
        const grid = document.querySelector(".grid") as HTMLElement;
        const cells = grid.querySelectorAll(".cell");

        cells.forEach((cell) => {  // Will log each spot that is clicked
            cell.addEventListener('click', (event) => {
                event.preventDefault();
                const cellID = cell.id
                console.log(cellID);
            })
        })
    },
}

export default eventListeners