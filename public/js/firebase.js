let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAq3Sh_m5H49F2x7tn5lu_7Ft7fEGjhK-8",
    authDomain: "journal-a2921.firebaseapp.com",
    projectId: "journal-a2921",
    storageBucket: "journal-a2921.appspot.com",
    messagingSenderId: "830267368851",
    appId: "1:830267368851:web:01ee8ca34ae93c6f59b466"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();