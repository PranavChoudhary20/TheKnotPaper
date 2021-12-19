import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTBUaU_hc1nWlqm3o3GEOpkYM6wJofMkE",
  authDomain: "contact-yash.firebaseapp.com",
  projectId: "contact-yash",
  storageBucket: "contact-yash.appspot.com",
  messagingSenderId: "521172473282",
  appId: "1:521172473282:web:5f16100a56a42b0ee7725b",
});

var db = firebaseApp.firestore();

export { db };
