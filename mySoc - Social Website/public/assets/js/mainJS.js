function locationHashChanged() {
    $('#secondLink').addClass('active');
    $('a[href="' + location.hash + '"]').addClass('active');
}

window.onhashchange = locationHashChanged;
locationHashChanged(); // initial load


var loginButton = document.getElementById("secondLink");

loginButton.addEventListener("click", function(){
	alert("Already selected!");
})

// FIREBASE CODE

var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var auth = firebase.auth();
var db = firebase.database();

function login()
{
	var email = userEmail.value;
	var password = userPassword.value;

	auth.signInWithEmailAndPassword(email, password)
		.then(function(user){
			alert("Successfully logged in!");
			redirectHome();
		})
		.catch(function(error){
			alert(error.message);
		})
}

function redirectHome()
{
	return location.href = "mainHomePage.html";
}