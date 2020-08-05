var user;
window.onload = function () {
    user = localStorage.getItem("item");
    // console.log(user);
}


//Fire....

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

function writeit(title, body) {
    if (user) {
        firebase.firestore().collection(user).doc('PushMsg').collection('All').doc(title).get().then(function (doc) {

            const response = firebase.firestore().collection(user).doc('PUSHMSG').collection('ALL').doc(title).set({
                body: body,
                createdAt: new Date(),
            });
            const response2 = firebase.firestore().collection(user).doc('PUSHMSG').set({
                title: title,
                body: body,
                createdAt: new Date(),
            }).then(() => {
                console.log("DONE EDITING");
            });

        }).catch(function (error) {
            console.log("Error getting document:", error);
            alert("We are Really Sorry ,We have encountered an unexpected Error While setting up your Default Notifications.Don't Worry you can still create your own Notifications and use it. :)");
        });
    } else {
        window.alert("Error Seems like You have not REGISTERED as we are unable to find Your Master Key. Downloading the App will be of no use for you without master key.");
    }
}

function airtel() {

    const title2 = "Get ₹40 instant cashback";
    const body2 = "On electricity bill payment of ₹1000 and above. T&C.";

    writeit(title2, body2);

    const title = "Airtel bonanza !!";
    const body = "Payein 50GB data aapke maujooda unlimited pack ki vaidhta tak, Rs251 ke Airtel recharge par. Sirf Unlimited/Smart pack par manya.";

    writeit(title, body);

}