import './styles/styles.scss';

import DOM from "./DOM"; // Static DOM only
import eventListeners from "./eventListeners"; // Interactive 
import Player from './player';

const title = DOM.createH1('Battleship', 'title');
const nameForm = DOM.nameForm("Enter your name!");
const grids = DOM.gameArea(10, "player", "computer");
const controls = DOM.gameControls();

DOM.appendComponent(title);
DOM.appendComponent(nameForm);
DOM.appendComponent(grids);
DOM.appendComponent(controls);


eventListeners.placeShipBoardListener();


eventListeners.nameFormListener().then((humanPlayer) => {
    console.log(humanPlayer);



}).catch((error) => {
    console.log(`Error: ${error}`);
})


/*
let attackedSpotsAI = [];
const computerPlayerAI = {
    randomAttack: () => {  
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);

        if (attackedSpotsAI.includes([randomRow, randomCol])) {
            console.log(`Already attacked ${randomRow},${randomCol} --list`)
            computerPlayerAI.randomAttack()
        } else {
            computerPlayer.attack([randomRow, randomCol], humanPlayer);
            attackedSpotsAI.push([randomRow, randomCol]);
            console.log(`Successful attack ${randomRow},${randomCol}`);
        }
    }
}

for (let i = 0; i < 100; i++) {
    computerPlayerAI.randomAttack();
}
*/