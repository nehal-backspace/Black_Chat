function getlogin() {
    document.getElementById("register").style.display = "none";
    document.getElementById("in").style.display = "block";
}


function getregis() {
    document.getElementById("in").style.display = "none";
    document.getElementById("register").style.display = "block";
}

$(document).ready(function () {

    // Hide the div
    $("#hideme").hide();

    // Show the div in 3s
    $("#hideme").delay(3700).fadeIn(900);

});
var message = "BLACK   CHAT";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.getElementById("messageLabel");

function textFunc() {
    messageLabel.innerHTML = message.substring(0, msgCount);

    if (msgCount == message.length) {
        // Stop Timer
        clearInterval(timer1);

        // Start blinking animation!
        timer2 = setInterval("blinkFunc()", 200);

    } else {
        msgCount++;
    }
}

function blinkFunc() {

    // Blink 3 times
    if (blinkCount < 4) {
        if (blinkFlg == 0) {
            messageLabel.innerHTML = message;
            blinkFlg = 1;
            blinkCount++;
        } else {
            messageLabel.innerHTML = "";
            blinkFlg = 0;
        }
    } else {
        // Stop Timer
        clearInterval(timer2);
    }
}


timer1 = setInterval("textFunc()", 150); // Every 150 milliseconds



// Fire...

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdPkdDpqEio3kPTDsewCLjitfn0bnd378",
    authDomain: "chatiyapp.firebaseapp.com",
    databaseURL: "https://chatiyapp.firebaseio.com",
    projectId: "chatiyapp",
    storageBucket: "chatiyapp.appspot.com",
    messagingSenderId: "411562452094",
    appId: "1:411562452094:web:ada1cef477d4bd0f22e42f",
    measurementId: "G-B6G5QNGMNT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function regis() {

    var x = document.getElementById("goodname").value;
    var y = document.getElementById("master").value + "@chatiyapp.com";
    var z = "123456";

    document.getElementById("load").style.display = "block";
    firebase.auth().createUserWithEmailAndPassword(y, z).then((res) => {
        const userwa = firebase.auth().currentUser;
        userwa.updateProfile({
            displayName: x
        })
        localStorage.setItem("item", userwa);
        document.getElementById("load").style.display = "none";
        window.location.replace("http://blackchat.ml/download.html");

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        document.getElementById("load").style.display = "none";
        console.log("Wait !! ERROR : " + errorMessage);
        window.alert("Seems like You have Already Registered...Please Login and get the App :)")
    });
}

function login() {
    var y = document.getElementById("master2").value + "@chatiyapp.com";
    var z = "123456";
    document.getElementById("load").style.display = "block";
    firebase.auth().signInWithEmailAndPassword(y, z).then((res) => {
        const userwa = firebase.auth().currentUser.email;
        localStorage.setItem("item", userwa);
        document.getElementById("load").style.display = "none";
        window.location.replace("http://blackchat.ml/download.html");

        // window.location.replace("file:///D:/BLACK_CHAT/Github-Black_Chat/download.html");

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        document.getElementById("load").style.display = "none";
        console.log("Wait !! ERROR : " + errorMessage);
        window.alert("Seems like You have not Registered...Please Register first Or try again :)");
    });

}
