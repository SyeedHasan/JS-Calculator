const userInput = document.querySelector('.inbox input[type="text"]');
const mainDiv = document.querySelector('div.inbox');

let toDos = [];

userInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addToDo();
    }
})

function addToDo() {

    if (userInput.value) {
        var val = userInput.value;

        var div = document.createElement('div');
        div.setAttribute('class', 'item');

        var inp = document.createElement('input');
        inp.setAttribute('type', 'checkbox');

        var p = document.createElement('p');
        p.innerHTML = val;

        var span = document.createElement('span');
        span.innerHTML = '<i class="fas fa-times"></i>'

        div.appendChild(inp);
        div.appendChild(p);
        div.appendChild(span);

        mainDiv.appendChild(div);
        userInput.value = "";

        span.addEventListener('click', () => {
            mainDiv.removeChild(span.parentNode);
        });

    } else {
        alert("Add something to the input box!");
    }

}