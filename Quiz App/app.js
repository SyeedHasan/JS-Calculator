//Holds the current question number
var quesNo = document.querySelector('span.quesNo');
//Holds the details of the question
var quesDetail = document.querySelector('span.quesDetail');
//Array of question options
var quesOptions = Array.from(document.querySelectorAll('.type'));
//Final score
var scoreHeader = document.querySelector('#score');

let score = 0;
let currQs = 0;

var questions = {

    '1': [
        'What is 2*2?', [1, 2, 3, 4], {
        correctAns: 1
    }],
    '2': ['What is 2*2?', [1, 2, 3, 4], {
        correctAns: 2
    }],
    '3': ['What is 2*2?', [1, 2, 3, 4], {
        correctAns: 3
    }],
    '4': ['What is 2*2?', [1, 2, 3, 4], {
        correctAns: 4
    }],
    '5': ['What is 2*2?', [1, 2, 3, 4], {
        correctAns: 1
    }],
    '6': ['What is 2*2?', [1, 2, 3, 4], {
        correctAns: 2
    }],
    '7': ['What is 2*2?', [1, 2, 3, 4], {
        correctAns: 4
    }]

};

//Stores data locally to login later
function Register() {

    var name = document.getElementById('userName').value;
    var email = document.getElementById('emailAddress').value;
    var number = document.getElementById('userNumber').value;
    var password = document.getElementById('userPassword').value;

    //Created later, now we can set this object
    var user = {
        name: name,
        email: email,
        number: number,
        password: password,
    };


    //Get or set in Cache
    //Stores stuff locally in the system
    // or browser
    //Two arguments, property and value 
    //separated by commas
    //To check your local storage,
    //See these in devTools -> Application -> Local Storage -> File
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Number', number);
    localStorage.setItem('Password', password);

    //Stringify converts the object into strings
    localStorage.setItem("UserData", JSON.stringify(user));


    //Redirects page to the login page for login
    window.location = 'login.html';

}

//Logs in if proper data is provided
function Login() {

    var email = document.getElementById('inpEmailAdd');
    var password = document.getElementById('inpUserPass');

    //Access the stored data
    var storedEmail = localStorage.getItem('Email');
    var storedPass = localStorage.getItem('Password');

    if (storedEmail === email.value && password.value === storedPass) {
        alert("You are logged in. Welcome back!");
        window.location = 'key.html';
    } else {
        alert("Wrong user or password!");
        //Reset all values
        email.value = "";
        password.value = "";
    }

}

function generateQuiz() {
    var choice = document.getElementById('userChoice').value;
    var possibleChoices = "ABC";
    var flag = true;

    //Validate the input field, if its empty, generate an error
    if (choice.value === "") {
        alert("Doesn't work this way. Enter a choice.");
    }

    //This needs more validators par i'll add them later like all three CAB entered, wrong quiz is opened.
    //else if it has any of the options, proceed to the quiz,
    //Currently they all will lead to the same quiz.
    else if (choice.includes('A')) {
        alert("A");
    } else if (choice.includes('B')) {
        alert("B");
    } else if (choice.includes('C')) {
        alert("C");
    }

    //If an incorrect choice is entered,
    else {
        flag = !flag;
        alert("Wrong choice!");
    }

    if (flag) {
        window.location = 'quiz.html';
    }

}

function startQuiz() {
    var starter = document.getElementById("stQz");
    var quizSt = document.getElementById("quizDisplay");
    starter.setAttribute('class', 'display');
    quizSt.removeAttribute('class');
    serveQs();
}

function serveQs() {
    //To start the quiz, the value has to be incremented but the function
    //has to exit too.
    if(currQs == 0){
        ++currQs;
        return;
    }

    if(!questions[currQs]){
        localStorage.setItem('score', score);
        window.location = "result.html";

    }

    var answer = document.getElementById('userChoice').value;
    // console.log(questions[currQs][2]['correctAns']);
    //Current question, current answer, correct answer, score
    if (answer == questions[currQs][2]['correctAns']) {
        score++;
    }


    quesNo.innerHTML = currQs + ": ";
    quesDetail.innerHTML = questions[currQs][0];

    ++currQs;    


}

function seeScore(){
    var score1 = localStorage.getItem('score');
    scoreHeader.innerHTML = "Final Score: " + score1 + " !";  
}