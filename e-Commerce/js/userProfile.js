
// FIREBASE CODE

var auth = firebase.auth(); //Started firebase authentication
var database = firebase.database().ref("/");

var userNameHeader = document.querySelector("#profileName");
var userImg = document.querySelector("img");


// function initApp() {

//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           var photoURL = user.photoURL;
//           var isAnonymous = user.isAnonymous;
//           var uid = user.uid;
//           var providerData = user.providerData;
//         }

//         console.log(user);
//     })
// }

window.onload = function() {
    var headerContent = userNameHeader.textContent;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
          console.log(user.displayName);
          var userName = user.displayName;
          var photoURL = user.photoURL;

          userImg.setAttribute("src", photoURL);
          userNameHeader.textContent = userName + "'s " + headerContent;
      }
      else
      {
          alert("No user signed in at the moment. Redirecting to login");
          location.href = "mainLoginPage.html"
      }

    })
}