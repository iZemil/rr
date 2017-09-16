import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyD0HlyMqYRNB-k8VHpdw-Lx5ybeWyBd44I",
    authDomain: "ze-task-app.firebaseapp.com",
    databaseURL: "https://ze-task-app.firebaseio.com",
    projectId: "ze-task-app",
    storageBucket: "ze-task-app.appspot.com",
    messagingSenderId: "449422606999"
  };
  
  firebase.initializeApp(config);
} catch (e) {
  
}


// sending data to DB
export const firebaseRef = firebase.database().ref();

export default firebase;


