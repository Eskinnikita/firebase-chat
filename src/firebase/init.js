import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYnyqMzKJieYmLqeD0a6sR1p_7lJs0T-k",
    authDomain: "vue-chat-68016.firebaseapp.com",
    databaseURL: "https://vue-chat-68016.firebaseio.com",
    projectId: "vue-chat-68016",
    storageBucket: "vue-chat-68016.appspot.com",
    messagingSenderId: "81170056503"
  };

  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()
