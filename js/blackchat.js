function getlogin() { document.getElementById("register").style.display = "none", document.getElementById("in").style.display = "block" } function getregis() { document.getElementById("in").style.display = "none", document.getElementById("register").style.display = "block" } $(document).ready(function () { $("#hideme").hide(), $("#hideme").delay(3700).fadeIn(900) }); var timer1, timer2, message = "BLACK   CHAT", msgCount = 0, blinkCount = 0, blinkFlg = 0, messageLabel = document.getElementById("messageLabel"); function textFunc() { messageLabel.innerHTML = message.substring(0, msgCount), msgCount == message.length ? (clearInterval(timer1), timer2 = setInterval("blinkFunc()", 200)) : msgCount++ } function blinkFunc() { blinkCount < 4 ? 0 == blinkFlg ? (messageLabel.innerHTML = message, blinkFlg = 1, blinkCount++) : (messageLabel.innerHTML = "", blinkFlg = 0) : clearInterval(timer2) } timer1 = setInterval("textFunc()", 150); var firebaseConfig = { apiKey: "AIzaSyCdPkdDpqEio3kPTDsewCLjitfn0bnd378", authDomain: "chatiyapp.firebaseapp.com", databaseURL: "https://chatiyapp.firebaseio.com", projectId: "chatiyapp", storageBucket: "chatiyapp.appspot.com", messagingSenderId: "411562452094", appId: "1:411562452094:web:ada1cef477d4bd0f22e42f", measurementId: "G-B6G5QNGMNT" }; function regis() { var e = document.getElementById("goodname").value, t = document.getElementById("master").value + "@chatiyapp.com"; document.getElementById("load").style.display = "block", firebase.auth().createUserWithEmailAndPassword(t, "123456").then(t => { const a = firebase.auth().currentUser; a.updateProfile({ displayName: e }), localStorage.setItem("item", a.email), document.getElementById("load").style.display = "none", window.location.replace("http://blackchat.ml/download.html") }).catch(function (e) { e.code; var t = e.message; document.getElementById("load").style.display = "none", console.log("Wait !! ERROR : " + t), window.alert("Seems like You have Already Registered...Please Login and get the App :)") }) } function login() { var e = document.getElementById("master2").value + "@chatiyapp.com"; document.getElementById("load").style.display = "block", firebase.auth().signInWithEmailAndPassword(e, "123456").then(e => { const t = firebase.auth().currentUser.email; localStorage.setItem("item", t), document.getElementById("load").style.display = "none", window.location.replace("http://blackchat.ml/download.html") }).catch(function (e) { e.code; var t = e.message; document.getElementById("load").style.display = "none", console.log("Wait !! ERROR : " + t), window.alert("Seems like You have not Registered...Please Register first Or try again :)") }) } firebase.initializeApp(firebaseConfig), firebase.analytics();
