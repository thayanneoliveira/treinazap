import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyC-nCr1jBffe1VbKtjp734MxN_pj_YTzE0",
    authDomain: "thay-8e269.firebaseapp.com",
    projectId: "thay-8e269",
    storageBucket: "thay-8e269.appspot.com",
    messagingSenderId: "998979190222",
    appId: "1:998979190222:web:1d31f05d62db12aa94bf9f"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
