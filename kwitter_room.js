
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDMmvXsdel5z9Q7Vnilm79L2aU3LpDEcc8",
      authDomain: "kwitter-17f24.firebaseapp.com",
      databaseURL: "https://kwitter-17f24-default-rtdb.firebaseio.com",
      projectId: "kwitter-17f24",
      storageBucket: "kwitter-17f24.appspot.com",
      messagingSenderId: "1030123826149",
      appId: "1:1030123826149:web:37bc5b9489857546045d0c",
      measurementId: "G-M58KF3FYWB"
      
    };
    
    // Initialize Firebase
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_name+"</div><hr>";
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}