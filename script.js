// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC0DpBUHNLOnbsJm-B3GnWnHtDzkL1thQY",
    authDomain: "d-skychat.firebaseapp.com",
    databaseURL: "https://d-skychat-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "d-skychat",
    storageBucket: "d-skychat.firebasestorage.app",
    messagingSenderId: "491029869889",
    appId: "1:491029869889:web:799bec5f276dd0f3155dc0"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function sendMessage() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    if(username && message) {
        db.ref("messages").push({
            name: username,
            text: message
        });
        document.getElementById("message").value = "";
    }
}

// Menampilkan pesan
db.ref("messages").on("child_added", function(snapshot) {
    let msg = snapshot.val();
    let msgElement = document.createElement("div");
    msgElement.className = "message";
    msgElement.innerText = msg.name + ": " + msg.text;
    document.getElementById("messages").appendChild(msgElement);
});