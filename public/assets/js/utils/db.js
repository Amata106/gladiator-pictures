const firebaseConfig = {
    apiKey: "AIzaSyAE73eV5-mgBzez3wAj4RYZCeQRcl8rXU4",
    authDomain: "gladiator-pictures.firebaseapp.com",
    projectId: "gladiator-pictures",
    storageBucket: "gladiator-pictures.appspot.com",
    messagingSenderId: "532938860359",
    appId: "1:532938860359:web:9a40fc3105fbfcb6d34e62",
    measurementId: "G-LB77P71MDE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

if (window.location.pathname.includes('/admin/')) {
    if (!localStorage.userIsAdmin) {
        window.location.href = '/'
    }
}