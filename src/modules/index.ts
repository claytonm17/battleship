import Player from "../modules/player";
import './styles/styles.scss';

const humanPlayer = new Player("Charlie");
const computerPlayer = new Player("Computer", true);

import DOM from "./DOM";

DOM.createH1('Battleship', 'title');
DOM.nameForm("Enter Your Name:");

DOM.gameArea(10, "player", "computer");