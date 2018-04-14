function locationHashChanged() {
    $('#firstLink').addClass('active');
    $('a[href="' + location.hash + '"]').addClass('active');
}

window.onhashchange = locationHashChanged;
locationHashChanged(); // initial load

var signupButton = document.getElementById("firstLink");

signupButton.addEventListener("click", function(){
	alert("Already selected!");
})


// FIREBASE CODE

var auth = firebase.auth(); //Started firebase authentication
var database = firebase.database().ref("/");

// Selecting all elements in the form,
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var userNumber = document.getElementById("userNumber");
var userFirstName = document.getElementById("firstName");
var userLastName = document.getElementById("lastName");

function signUp() {
	var emailAddress = userEmail.value;
	var password = userPassword.value;
	var name = userFirstName.value + " " + userLastName.value;
	var number = userNumber.value;

	auth.createUserWithEmailAndPassword(emailAddress, password)
		.then(function (user) {
			return user.updateProfile({
			 			displayName : name,
			 			phoneNumber: number,
			 			photoURL: "https://mbevivino.files.wordpress.com/2011/08/silhouette_orange.jpg"
					})
				.then(function(){
					// location.href = "mainLoginPage.html";
					alert("Successfully signed-up, redirecting to login...");
					addUserToDatabase(emailAddress, name, number);
					redirectLogin();
				})
				.catch(function(error){
					alert(error.message);
				})			
		})
		.catch(function(error){
			alert(error.message);
		})

}

function addUserToDatabase(emailAddress, name, number)
{
	var userObject = {
		displayName: name,
		phoneNumber: number,
		email: emailAddress,
		photoURL: "Icons/fb.jpg"	
	};

	database.child("users").push(userObject);

	database.child("users").on("child_added", function(snapshot){
		var obj = snapshot.val();
		obj.id = snapshot.key;
	});
}

function redirectLogin()
{
	return location.href = "mainLoginPage.html";
}