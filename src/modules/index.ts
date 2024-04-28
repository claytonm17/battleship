import './styles/styles.scss';

import DOM from "./DOM"; // Static DOM only
import eventListeners from "../eventListeners"; // Interactive 

const title = DOM.createH1('Battleship', 'title');
const nameForm = DOM.nameForm("Enter your name!");

DOM.appendComponent(title);
DOM.appendComponent(nameForm);

eventListeners.nameFormListener().then((humanPlayer) => {
    console.log(humanPlayer);

    // Game loop now. Add ships etc. Create computer to play against


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