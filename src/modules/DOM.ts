const DOM = {

    createH1: (text: string, className: string) => {
        const body = document.querySelector('body');
        const h1 = document.createElement('h1');
        h1.textContent = text;
        h1.className = className;
        body.appendChild(h1);
    },

    nameForm: (title: string) => {
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.className = "form-container";
        body.append(container);

        const h2 = document.createElement('h2');
        h2.textContent = title;
        container.appendChild(h2);

        const form = document.createElement('form');
        form.className = "player-name-form";
        form.action = "get";
        container.appendChild(form);

        const textInput = document.createElement('input');
        textInput.type = "text";
        textInput.placeholder = "Player name";
        textInput.id = "name";
        form.appendChild(textInput);

        const submitInput = document.createElement('input');
        submitInput.type = "submit";
        form.appendChild(submitInput);
    },

    createGrid: (size: number, name: string) => {
        const grid = document.createElement('div');
        grid.className = "grid";
        grid.id = name; // player name
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Messy but will allow for future adaptability
 
        for (let i = 0; i < size*size; i++) {
            const cell = document.createElement('div');
            cell.className = `spot${i}`; // Convert into conventional layout (A1, etc)
            grid.appendChild(cell)
        }
        return grid;
    },

    gameArea: (size: number, player1: string, player2: string) => {
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.className = "game-area"

        container.style.display = "flex";

        container.appendChild(DOM.createGrid(size, player1))
        container.appendChild(DOM.createGrid(size, player2))

        body.appendChild(container);
    }
}

export default DOM;