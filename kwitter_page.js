//YOUR FIREBASE LINKS
var config = {
      apiKey: "AIzaSyDMmvXsdel5z9Q7Vnilm79L2aU3LpDEcc8",
      authDomain: "kwitter-17f24.firebaseapp.com",
      databaseURL: "https://kwitter-17f24-default-rtdb.firebaseio.com",
      projectId: "kwitter-17f24",
      storageBucket: "kwitter-17f24.appspot.com",
      messagingSenderId: "1030123826149",
      appId: "1:1030123826149:web:37bc5b9489857546045d0c"
      
    };
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    // Initialize Firebase
    firebase.initializeApp(config);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'</h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value;
}
function updateLike(message_id){
      console.log("clicked on the button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatelikes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      });
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("index.html");
}