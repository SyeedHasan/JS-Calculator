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

let numbers = document.querySelectorAll('.number'); //This selects all numbers
let symbols = document.querySelectorAll('symbols'); //This selects all symbols

var display = document.querySelector('#displayBox');
var answer = document.querySelector('#equal');
var lastDigit = "number";
//Turn this into 'symbol' if a symbol is experienced.

function myFunction(obj) {
    console.log(obj.value);
    display.value += obj.value;
};

answer.addEventListener('click', function(){
    var ans = eval(display.value);
    display.value = ans;
});