var emailOpt = document.getElementById("emailInput");
var numOpt = document.getElementById("numberInput");
var mobileDisplay = document.getElementById("mobileDisplay");
var mobileBtn = document.getElementById("mobile");
var submitBtn = document.querySelector("#submitBtn");
var mainContent = document.querySelector(".mainContent");
var secSubmitBtn = document.querySelector("#secSubBtn");
var finalForm = document.getElementById("myForm");

mobileBtn.addEventListener("click", function() {
	emailOpt.removeAttribute("required");
	emailOpt.setAttribute("placeholder", "No more required!");
	mobileDisplay.classList.toggle("displayOrNot");
	submitBtn.classList.add("displayOrNot");
});


// submitBtn.addEventListener("click", function(){
// 	if(validateEmail(emailOpt.value)){
// 		alert("An email has been sent to the desired email.");
// 		emailOpt.value = "";
// 		finalForm.classList.add("displayOrNot");
// 		successMessage(emailOpt.value);
// 	}
// 	else {
// 		alert("Wrong email!");
// 	}
// })


secSubmitBtn.addEventListener("click", function(){
	if(validateNumber(numOpt.value)){
		alert("A message has been sent to the mobile number.");
		// this.removeAttribute("type");
		finalForm.classList.add("displayOrNot");
		successMessage(numOpt.value);
	}
	else {
		alert("Invalid mobile phone number!");
	}
})

function validateEmail(email) {
	// Copied RegEX. Learn if possible!
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateNumber(text){
    var numeric="1234567890";
    
    if (text.length != 11)
    {
      return false;
    }
    
    for(var i=0; i < text.length; i++)
    {
      if (!numeric.includes(text[i]))
      {
         return false;
      }
    }

    return true;
}

function successMessage(userData) {
	var para = document.createElement("p");
	var newButton = document.createElement("button");
	var paraText = document.createTextNode("");
	var isNumber =  /^\d+$/.test(userData); //Returns true if a number
	var buttonText;
	var mobileOrEmail;
	//false - mobile, email - true
	if(isNumber)
	{
		paraText.textContent = "Password reset was successful. A code has been sent to the provided mobile phone number (Only works for registered numbers). Please enter the code for generating a new password which can be changed through the dashboard. (CURRENTLY DISABLED COS PHONE VERIFICATION COSTS, AINT PUTTIN UP WITH THAT SHIT)"
		buttonText = document.createTextNode("Received the code?");
		mobileOrEmail = false;
	}
	else
	{
		paraText.textContent = "Password reset was sucessful. An email has been sent to the provided email. Please check your mail for a link sent by us for password retrieval."
		buttonText = document.createTextNode("Okay, take me to the Login Page.");
		mobileOrEmail = true;
	}

	para.appendChild(paraText);
	para.style.fontSize = "18px";

	newButton.appendChild(buttonText);
	newButton.classList.add("btn", "btn-default", "btn-md");
	

	mainContent.appendChild(para);
	mainContent.appendChild(newButton);

	if(mobileOrEmail === true){	
		newButton.addEventListener("click", redirectPg);
	}
	else
	{
		//fill it up!!
	}
}


// FIREBASE CODE
// Already define above, use for navigation them remove later
// var emailOpt = document.getElementById("emailInput");
// var numOpt = document.getElementById("numberInput");
// var mobileDisplay = document.getElementById("mobileDisplay");
// var mobileBtn = document.getElementById("mobile");
// var submitBtn = document.querySelector("#submitBtn");
// var mainContent = document.querySelector(".mainContent");
// var secSubmitBtn = document.querySelector("#secSubBtn");
// var finalForm = document.getElementById("myForm");

var auth = firebase.auth();
var database = firebase.database();

function sendEmail()
{
	var email = emailOpt.value;

	auth.sendPasswordResetEmail(email)
		.then(function (){
			alert("Password reset email sent. Login with the sent password.");
			finalForm.classList.add("displayOrNot");
			successMessage(emailOpt.value);
			// redirectPg();
		})
		.catch(function (error){
			alert(error.message);
			location.reload();
		});
}

//Figure out some other day!!
// function sendNumberVerification()
// {
// 	var number = numOpt.value;
// //Change recaptcha-container
// 	var applicationVerifier = new firebase.auth.RecaptchaVerifier("AppVerifier.html");

// 	firebase.auth().signInWithPhoneNumber(number, applicationVerifier)
// 		.then(function(confirmationResult){
// 			finalForm.classList.add("displayOrNot");
// 			successMessage(number);
// 		})

// }

function redirectPg()
{
	return 	location.href = "mainLoginPage.html";
}