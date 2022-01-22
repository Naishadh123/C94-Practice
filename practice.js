var firebaseConfig = {
    apiKey: "AIzaSyA9LWJaKzZCfpOUEZxeD6vfcgE7BglGBTw",
    authDomain: "kwitter-data-base-78211.firebaseapp.com",
    databaseURL: "https://kwitter-data-base-78211-default-rtdb.firebaseio.com",
    projectId: "kwitter-data-base-78211",
    storageBucket: "kwitter-data-base-78211.appspot.com",
    messagingSenderId: "715702200660",
    appId: "1:715702200660:web:34b144d890b95090c5c0c1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function adduser()
{
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}