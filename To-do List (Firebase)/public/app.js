//Should run first to check the server for saved ToDo's
checkPastToDos();

const userInput = document.querySelector('.inbox input[type="text"]');
const button = document.querySelector('a.button');
const mainDiv = document.querySelector('div.inbox');

let toDos = [];

button.addEventListener('click', (event) => {
    addToDo(userInput);
});

userInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addToDo(userInput);
    }
})

//Counter to set the number of todos in the list
//Save this counter to the database too for proper identification of the current toDo.

// let i = getNoOfToDos();

let i = 1;

// function getNoOfToDos(){
    
//     return firebase.database().ref("/").once('value').then((snapshot) => {
//         return snapshot.val().ToDoNo;
//     });

// }

function addToDo(userInp, pastOrNot = 0, childKey=0) {
    var val;

    if(pastOrNot!=0){
        val = userInp;
    }
    else {
        val = userInp.value;
    }

    if (val) {

        if(!(pastOrNot==="past"))
            firebase.database().ref("/" + "ToDos").child("ToDoNo" + i).set(val);

        if(!childKey){
            childKey = "ToDoNo" + i;
        }

        i++;

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
            //To remove from firebase
            firebase.database().ref('/' + 'ToDos').child(childKey).remove();

            //To remove from the HTML
            mainDiv.removeChild(span.parentNode);
        });

    } 
    
    else {
        alert("Add something to the input box!");
    }

    // firebase.database().ref("/").child("ToDoNo").set(i);

}

function checkPastToDos(){

    firebase.database().ref("/" + "ToDos").once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          addToDo(childData, "past", childKey);
        });
      });

}