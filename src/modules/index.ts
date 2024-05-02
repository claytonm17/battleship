import './styles/styles.scss';

import render from "./DOM"; // Static DOM only
import eventListeners from "./eventListeners"; // Interactive 
import Player from './player';

const title = render.createH1('Battleship', 'title');
const nameForm = render.nameForm("Enter your name!");
const grids = render.gameArea(10, "player", "computer");
const controls = render.gameControls();

render.appendComponent(title);
render.appendComponent(nameForm);

//eventListeners.placeShipBoardListener();

eventListeners.nameFormListener().then((humanPlayer) => {
    console.log(humanPlayer);
    render.removeNameForm();
    render.appendComponent(grids);
    render.appendComponent(controls);

    humanPlayer.createBattleship([0,0], "V");

    let selectedCellID = null;

    const grid = document.querySelector("#player");
    grid.addEventListener('click', (event) => {
        const cell = event.target as HTMLElement;
        selectedCellID = (cell.id).split('-');

        console.log(selectedCellID);
    });

    const controlPanel = document.querySelector(".controls");
    controlPanel.addEventListener('submit', (event) => {
        
        if (selectedCellID) {

            //humanPlayer.createBattleship(selectedCellID)
        }
    })


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