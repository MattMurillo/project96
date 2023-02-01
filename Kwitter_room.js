function addRoom()
{
     room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.getItem("room_name". room_name);

    window.location = "kwitter_room.html"
}

 function logout()
 {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "kwitter.html"
  }
 
  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like:0 
    });
    document.getElementById("msg").value ="";
}
