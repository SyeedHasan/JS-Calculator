
// FIREBASE CODE

var auth = firebase.auth(); //Started firebase authentication
var database = firebase.database().ref("/");

var mainUserNameDisplay = document.querySelector(".navOptions a");
var firstNavOpt = document.querySelector("h5");
var userImg = document.querySelector("img");

function initApp() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

		  var linkData = document.createTextNode(displayName);
		  var userProfileLink = document.createElement("a");
	      userProfileLink.setAttribute("href", "userProfile.html");
	      userProfileLink.appendChild(linkData);
	      firstNavOpt.appendChild(userProfileLink);
	      // userImg.setAttribute("src", "Icons/fb.jpg");
        userImg.setAttribute("src", photoURL);
          console.log(user);
        }
    else
    {
    	location.href="mainLoginPage.html";
    }

	})
    


}