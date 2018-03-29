//Returns a nodelist of all td's in the table
var td = document.getElementsByTagName("td");

var div = document.getElementsByTagName('div');

//Convert the nodeList into an Array
var tf = Array.from(td);

//Flag to select the user
var currUser = true;

//Playing board
var board = [

  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]

];

//Repeat the same functionality for all TD's in the array
//Can also be done with forEach
for (var i = 0; i < tf.length; i++) {
  tf[i].addEventListener("click", change);
}

//Callback function to put in crosses and circles on user turns
function change() {

  //Returns the number of the block
  colNo = this.getAttribute('data-ng-value');
  rowNo = this.getAttribute('aria-valuenow');

  //'this' refers to the selector ie the tf[i] from the listener above
  if (currUser) {
    this.innerHTML = "<td><img width='100' height='100' src='circle.png'></td>";
    board[rowNo][colNo] = "O";
    this.removeEventListener('click', change, false);

    checkWin("O", rowCheck("O"), colCheck("O"), diagCheck("O"));

  } else {
    this.innerHTML = "<td><img width='100' height='100' src='cross.png'></td>";
    board[rowNo][colNo] = "X";
    this.removeEventListener('click', change, false);

    checkWin("X", rowCheck("X"), colCheck("X"), diagCheck("X"));

  }

  //Toggle the value
  currUser = !currUser;

}

//Three check functions to return whether their individual conditions are true or not
function rowCheck(valToCheck) {

  //valToCheck - The users player, ie the X or O.

  for (var i = 0; i < 3; i++) {

    if (board[i][0] == valToCheck &&
      board[i][1] == valToCheck &&
      board[i][2] == valToCheck) {
      return true;
    } else {
      continue;
    }

  }

  return false;

}

function colCheck(valToCheck) {

  //valToCheck - The users player, ie the X or O.

  for (var i = 0; i < 3; i++) {

    if (board[0][i] == valToCheck &&
      board[1][i] == valToCheck &&
      board[2][i] == valToCheck) {
      return true;
    } else {
      continue;
    }

  }

  return false;

}

function diagCheck(valToCheck) {
  var bool = true;
  //Two diagonals to check
  for (var j = 0; j < 3; j++) {
    if (board[j][j] == valToCheck) {
      bool = true;
      continue;

    } else {
      bool = false;
      break;
    }

  }

  if (bool) {
    return true;
  }

  var i = 0;
  for (var j = 2; j >= 0; j--) {
    if (board[i][j] === valToCheck) {
      bool = true;
      i++;
      continue;
    } else {
      bool = false;
      break;
    }

  }

  if(!bool){
    return false;
  }

  return true;
}

//To check if the user has won. We should check row wise, column wise and diagonally.
//Any one is true, we declare a win!
function checkWin(user, row, column, diagonal) {
  if (row || column || diagonal) {
    //End the condition by removing all listeners and declaring a win.
    for (var i = 0; i < tf.length; i++) {
      tf[i].removeEventListener("click", change, false);
    }

    var h1 = document.createElement('h1');
    h1.textContent = user + " Won!";
    document.body.childNodes[1].appendChild(h1);


  } else {
    return;
  }
}