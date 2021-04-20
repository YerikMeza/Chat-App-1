var firebaseConfig = {     apiKey : "AIzaSyC1_YZ36M4b6PtciZSjsCSyJWR5w4sLtjo",
     authDomain : "kwitter-projects.firebaseapp.com",
     databaseURL : "https://kwitter-projects-default-rtdb.firebaseio.com",
     projectId : "kwitter-projects",
     storageBucket : "kwitter-projects.appspot.com",
     messagingSenderId : "1090889680509",
     appId : "1: 1090889680509: web: 89a9d4ba59eb4dd6c61314" };
      // Initialize Firebase
       firebase . initializeApp ( firebaseConfig ); 
 
 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
