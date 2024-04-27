import Player from "../modules/player";
import './styles/styles.scss';

import DOM from "./DOM";

DOM.appendComponent(DOM.createH1('Battleship', 'title'));
DOM.appendComponent(DOM.nameForm("Enter Your Name:"));
/*
const form = document.querySelector(".player-name-form");
const textInput = document.querySelector("#name");
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const playerName = textInput.value;
    console.log(playerName);

    humanPlayer = new Player(playerName, false);
})
*/

DOM.appendComponent(DOM.gameArea(10, "Player", "Computer"));

// Going to test functionality of actual game before going further
const humanPlayer = new Player("Human", false);
const computerPlayer = new Player("Computer", true);

humanPlayer.createCarrier([4,3], "H");
humanPlayer.createBattleship([0,0], "V");
humanPlayer.createSubmarine([3,3], "V");
humanPlayer.createDestroyer([9,4], "V");
humanPlayer.createCruiser([6,7], "V");

computerPlayer.attack([4,3], humanPlayer);

let attackedSpotsAI = [];
const computerPlayerAI = {
    randomAttack: () => {  
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);

        if (computerPlayer.attack([randomRow, randomCol], humanPlayer) === null) {
            console.log(`Already attacked ${randomRow},${randomCol}`)
            return;
        } else if (attackedSpotsAI.includes([randomRow, randomCol])) {
            console.log(`Already attacked ${randomRow},${randomCol} --list`)
            return;
        } else {
            computerPlayer.attack([randomRow, randomCol], humanPlayer);
            attackedSpotsAI.push([randomRow, randomCol]);
            console.log(`Successful attack ${randomRow},${randomCol}`);
        }
    }
}

for (let i = 0; i < 1000; i++) {
    computerPlayerAI.randomAttack();
}

console.log(humanPlayer.gameboard);
console.log(humanPlayer.gameboard.checkShipsSunk())