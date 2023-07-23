// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // import firebase from "firebase";
// import { firebase } from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

///-----------------------------
// import { firebase } from "firebase";
// import "firebase/firestore";
// import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqh5bFAC0C_5_qLYtKw1NAAtE6-a1lpIQ",
  authDomain: "clone-app-a5a89.firebaseapp.com",
  projectId: "clone-app-a5a89",
  storageBucket: "clone-app-a5a89.appspot.com",
  messagingSenderId: "182595843824",
  appId: "1:182595843824:web:fee09867d48be1c21b7435",
  measurementId: "G-TG3R2P9LWJ",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// // import "firebase/firestore";
// // import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = app.firestore();
// const auth = app.auth();

// export { db, auth };
