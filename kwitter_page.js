//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAXCLj__xQnYMLd9m2Q_d8ikjAnfnTk-5Q",
      authDomain: "bloopbeepboo1.firebaseapp.com",
      databaseURL: "https://bloopbeepboo1-default-rtdb.firebaseio.com",
      projectId: "bloopbeepboo1",
      storageBucket: "bloopbeepboo1.appspot.com",
      messagingSenderId: "22412263267",
      appId: "1:22412263267:web:ade86e50d2eae8dcf0dd56"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send() {
      msg=document.getElementById("msg").value;  
firebase.database().ref(room_name).push({
name:user_name,
message:msg,like:0});
document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code


Name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;

document.getElementById("output").innerHTML+=row;

function updatelike(message_id) {

      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({

            like:updatedlikes

      });
      
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
    }


//End code
      } });  }); }

