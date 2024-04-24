const DOM = {

    createH1: (text: string, className: string) => {
        const body = document.querySelector('body');
        const h1 = document.createElement('h1');
        h1.textContent = text;
        h1.className = className;
        body.appendChild(h1);
    },

    nameForm:(title: string) => {
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
}

export default DOM;