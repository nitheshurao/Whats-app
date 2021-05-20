// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyDCRfHuUAFijwQLlk2EXsHBFs5-I6sfM",
    authDomain: "whats-app-4acea.firebaseapp.com",
    projectId: "whats-app-4acea",
    storageBucket: "whats-app-4acea.appspot.com",
    messagingSenderId: "232728871861",
    appId: "1:232728871861:web:be78db805e4a5f71570ffc",
    measurementId: "G-83EFHJCWLN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
a
export { auth, provider };
export default db;