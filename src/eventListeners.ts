import DOM from "./modules/DOM";
import Player from "./modules/player";

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


}

export default eventListeners