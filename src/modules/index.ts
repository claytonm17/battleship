import Player from "../modules/player";
import './styles/styles.scss';

const humanPlayer = new Player("Charlie");
const computerPlayer = new Player("Computer", true);

import DOM from "./DOM";

DOM.appendComponent(DOM.createH1('Battleship', 'title'));
DOM.appendComponent(DOM.nameForm("Enter Your Name:"));

DOM.appendComponent(DOM.gameArea(10, "player", "computer"));