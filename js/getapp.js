var user;
window.onload = function () {
    user = localStorage.getItem("item")
};
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

function writeit(e, t) {
    user ? firebase.firestore().collection(user).doc("PushMsg").collection("All").doc(e).get().then(function (a) {
        firebase.firestore().collection(user).doc("PUSHMSG").collection("ALL").doc(e).set({
            body: t,
            createdAt: new Date
        }), firebase.firestore().collection(user).doc("PUSHMSG").set({
            title: e,
            body: t,
            createdAt: new Date
        }).then(() => {
            console.log("DONE EDITING")
        })
    }).catch(function (e) {
        console.log("Error getting document:", e), alert("We are Really Sorry ,We have encountered an unexpected Error While setting up your Default Notifications.Don't Worry you can still create your own Notifications and use it. :)")
    }) : window.alert("Error Seems like You have not REGISTERED as we are unable to find Your Master Key. Downloading the App will be of no use for you without master key.")
}

function airtel() {
    writeit("Get ₹40 instant cashback", "On electricity bill payment of ₹1000 and above. T&C.");
    writeit("Airtel bonanza !!", "Payein 50GB data aapke maujooda unlimited pack ki vaidhta tak, Rs251 ke Airtel recharge par. Sirf Unlimited/Smart pack par manya.")
}
function lenskart() {
    writeit("New in kids fashion ?", "Get BLU at just Rs. 499 ");
}
firebase.initializeApp(firebaseConfig), firebase.analytics();
