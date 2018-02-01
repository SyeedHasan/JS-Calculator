let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.querySelectorAll("#four");
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

// Whether an answer has been calculated or not.
let answerState = false;
// Identify the number/symbol to avoid repitition.
let identifyValue = "symbol";

let numbers = document.querySelectorAll('.number'); //This selects all numbers
let symbols = document.querySelectorAll('.symbols'); //This selects all symbols

var display = document.querySelector('#displayBox');
var answer = document.querySelector('#equal');
//Turn this into 'symbol' if a symbol is experienced.

function myFunction(obj) {
    // if (answerState == true) {
    //     display.value = "";
    //     answerState = false;
    // }
    // display.value += obj.value;

    // If a value has previously been calculated, empty the input cell.
// This function runs on each click.
    if (answerState == true) {
        display.value = "";
        answerState = false;
    }

};

answer.addEventListener('click', function () {
    if(display.value !== ""){
        var ans = eval(display.value);
        display.value = ans;
        answerState = true;
    }

});

Array.from(numbers).forEach(function (number) {
    number.addEventListener('click', function (num) {
        display.value += num.path[0].value;
        identifyValue = "number";
    });

});

Array.from(symbols).forEach(function (symbol) {
    symbol.addEventListener('click', function (sym) {
        if (identifyValue !== "symbol" && symbol.value !== "=") {
            //A symbol has been used.
            identifyValue = "symbol";
            display.value += symbol.value;
        }
    });

});




