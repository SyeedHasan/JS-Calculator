//Element selectors
var list = document.querySelector("ul");
var userInput = document.querySelector('input');
var button = document.querySelector('button');
var del = document.getElementsByTagName('span');

//Convert Nodelist to an Array
del = Array.from(del);

//Update toDo lists for present toDos
removeToDo();

//Update the list of toDos
function updateToDos() {
    var del = document.getElementsByTagName('span');
    del = Array.from(del);
    return del;
}

function addToDo(){

    if (userInput.value) {

        var A = userInput.value;
        var B = document.createElement('li');
        B.innerHTML = A + " <span> X </span>";
        list.appendChild(B);
        //This is to update the list
        removeToDo();
        userInput.value = "";

    } else {
        alert("Add something to the input box!");
    }

}

//Add the toDo to the list on clicking the button
button.addEventListener('click', function () {
    addToDo();
}); 

userInput.addEventListener('keydown', function(event){
    if(event.keycode === 13)
        addToDo();
})

//Delete the toDo from the list on clicking the button and updating toDos along the way
function removeToDo() {
    del = updateToDos();
    del.forEach(function (crossButton) {
        crossButton.addEventListener('click', function () {
            list.removeChild(crossButton.parentNode);
        })
    });

}