/*global firebase*/
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyC8GKMyYlYOJhQbrGDC1R7cTnx73wxjGZI",
  authDomain: "groupsprototype-76f49.firebaseapp.com",
  databaseURL: "https://groupsprototype-76f49.firebaseio.com",
  projectId: "groupsprototype-76f49",
  storageBucket: "",
  messagingSenderId: "717384300034"
};
firebase.initializeApp(config);

export default firebase.database();
