function getlogin() {
    document.getElementById("register").style.display = "none";
    document.getElementById("in").style.display = "block";
}

function logmeout() {
    firebase.auth().signOut().then(function () {
        console.log("Logged out");
    }).catch(function (error) {
        // An error happened.
    });
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



//Fire....

function regis() {

    var x = document.getElementById("goodname").value;
    var y = document.getElementById("master").value + "@chatiyapp.com";
    var z = "123456";


    firebase.auth().createUserWithEmailAndPassword(y, z).then((res) => {
        const userwa = firebase.auth().currentUser;
        userwa.updateProfile({
            displayName: x
        })
        window.location.replace("https://nehal-backspace.github.io/Black_Chat/download.html");
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("Wait !! ERROR : " + errorMessage);
        window.alert("Seems like You have Already Registered...Please Login and get the App :)")
    });
}

function login() {
    var y = document.getElementById("master2").value + "@chatiyapp.com";
    var z = "123456";

    firebase.auth().signInWithEmailAndPassword(y, z).then((res) => {
        window.location.replace("https://nehal-backspace.github.io/Black_Chat/download.html");
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("Wait !! ERROR : " + errorMessage);
        window.alert("Seems like You have not Registered...Please Register first Or try again :)");
    });

}
