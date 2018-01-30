let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
var four = document.querySelectorAll("#four");
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
var display = document.querySelector('td#displayBox');

// four.addEventListener('click', function(){
//     this.innerHTML = "four";
// });


function myFunction(obj) {
    console.log(obj.value);
    display.innerHTML += obj.value;
};

