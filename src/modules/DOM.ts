const DOM = {

    appendComponent: (component: HTMLElement) => {
        const body = document.querySelector('body');
        body.appendChild(component);
    },

    createH1: (text: string, className: string) => {
        const h1 = document.createElement('h1');
        h1.textContent = text;
        h1.className = className;
        return h1;
    },

    nameForm: (title: string) => {
        const container = document.createElement('div');
        container.className = "form-container";

        const h2 = document.createElement('h2');
        h2.textContent = title;
        container.appendChild(h2);

        const form = document.createElement('form');
        form.className = "player-name-form";
        //form.action = "get";
        container.appendChild(form);

        const textInput = document.createElement('input');
        textInput.type = "text";
        textInput.placeholder = "Player name";
        textInput.id = "name";
        form.appendChild(textInput);

        const submitInput = document.createElement('input');
        submitInput.type = "submit";
        submitInput.className = "submit-button";
        form.appendChild(submitInput);

        return container;
    },

    removeNameForm: () => { // After submit
        const container = document.querySelector(".form-container");
        container.remove();
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
            // Puts in same naming convention used in Gameboard class
            let cellRow = Math.floor(i / 10);
            let cellCol = i % 10;
            cell.id = `${cellRow.toString()}-${cellCol.toString()}`;
            cell.className = "cell";
            
            grid.appendChild(cell)
        }
        return grid;
    },

    gameArea: (size: number, player1: string, player2: string) => {
        const container = document.createElement('div');
        container.className = "game-area"
        container.style.display = "flex";

        const p1Container = document.createElement('div');
        p1Container.className = "player-title";
        const p1Heading = document.createElement('h3');
        p1Heading.textContent = player1;
        p1Container.appendChild(p1Heading);


        const p2Container = document.createElement('div');
        p2Container.className = "player-title";
        const p2Heading = document.createElement('h3');
        p2Heading.textContent = player2;
        p2Container.appendChild(p2Heading);

        p1Container.appendChild(DOM.createGrid(size, player1))
        p2Container.appendChild(DOM.createGrid(size, player2))

        container.appendChild(p1Container);
        container.appendChild(p2Container);

        return container;
    },

    gameControls: () => {
        const container = document.createElement('form');
        container.className = "controls";

        const origin = document.createElement('input');
        origin.type = "text";
        origin.maxLength = 2;
        origin.placeholder = "A1";
        origin.width = 10;

        const orientationH = document.createElement('input');
        orientationH.type = "radio";
        orientationH.value = "horizontal";
        orientationH.id = "horizontal";
        orientationH.name = "orientation";
        const labelH = document.createElement('label');
        labelH.textContent = "Horizontal";
        labelH.setAttribute("for", "horizontal");

        const orientationV = document.createElement('input');
        orientationV.type = "radio";
        orientationV.value = "vertical";
        orientationV.id = "vertical";
        orientationV.name = "orientation"; 
        const labelV = document.createElement('label');
        labelV.textContent = "Vertical";
        labelV.setAttribute("for", "vertical");

        const submitButton = document.createElement('input');
        submitButton.type = "submit";
        submitButton.value = "Place Ship";

        container.appendChild(origin);
        container.appendChild(orientationH);
        container.appendChild(labelH);
        container.appendChild(orientationV);
        container.appendChild(labelV);
        container.appendChild(submitButton);

        return container;
    },

    renderGrid: () => {

    }
}

export default DOM;