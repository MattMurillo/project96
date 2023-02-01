const firebaseConfig = {
    apiKey: "AIzaSyCpMjUHdEMXvKTWBwHqikpCJtN3znHqGwU",
    authDomain: "kwitter-db-356d4.firebaseapp.com",
    databaseURL: "https://kwitter-db-356d4-default-rtdb.firebaseio.com",
    projectId: "kwitter-db-356d4",
    storageBucket: "kwitter-db-356d4.appspot.com",
    messagingSenderId: "630734928528",
    appId: "1:630734928528:web:264840fabe06d0c4d67615"
  };

  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room_name" + Room_Names);
   row = "<div class='room_name' id=  " +Room_names+ "onclick='redirectToRoomName(this,id)>#' " +Room_names+ "</div><hr>"
   document.getElementById("output").innerHTML , += row;
   //End code
   });});}
getData();
