//Selected the tags
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

//Selected buttons
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

//Received values at start
var secVal = document.getElementById("seconds").getAttribute('aria-valuenow');
var minVal = document.getElementById("minutes").getAttribute('aria-valuenow');
var hourVal = document.getElementById("hours").getAttribute('aria-valuenow');

start.addEventListener("click", startTimer);

reset.addEventListener("click", function(){
    seconds.innerHTML = hours.innerHTML = minutes.innerHTML = "00";
    minVal = secVal = hourVal = 0;
    stop.removeAttribute('class');
    start.removeAttribute('class');
    
});

function startTimer() {

    //Disble the button from further altering
    start.setAttribute('class', 'disabled');
    reset.setAttribute('class', 'disabled');
    stop.removeAttribute('class');
    //Recall this function every 1sec
    var intId = setInterval(timer, 1000);

    //Added the listener to stop the interval
    //using the id returned locally above.
    stop.addEventListener("click", function () {
        start.removeAttribute('class');
        reset.removeAttribute('class');
        stop.setAttribute('class', 'disabled');
        clearInterval(intId);
    })
}

function timer() {

    seconds.innerHTML = secVal < 9 ? "0" + ++secVal : ++secVal;

    if (secVal > 59) {
        secVal = 0;
        seconds.innerHTML = "00";
        //Append a zero if minutes are below 10
        minutes.innerHTML = minVal < 9 ? "0" + ++minVal : ++minVal;
    }

    if (minVal > 59) {
        minVal = 0;
        minutes.innerHTML = "00";
        //Append a zero if hours are below 10
        hours.innerHTML = hourVal < 9 ? "0" + ++hourVal : ++hourVal;
    }

    if (hourVal >= 24) {
        seconds.innerHTML = hours.innerHTML = minutes.innerHTML = "00";
    }

}

// 
// 
// Code for the timer below these comments 
// 
// 

var hourT = document.getElementById('hourT').value;
var minT = document.getElementById('minT').value;
var secT = document.getElementById('secT').value;


