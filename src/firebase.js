// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(process.env.REACT_APP_APIKEY,
//   process.env.REACT_APP_AUTHDOMAIN,process.env.REACT_APP_DATABASEURL,process.env.REACT_APP_PROJECTID,process.env.REACT_APP_STORAGEBUCKET,process.env.REACT_APP_MESSAGINGSENDERID,process.env.REACT_APP_APPID,process.env.REACT_APP_MEASUREMENTID)

const firebaseConfig = {
  // apikey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASEURL,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASUREMENTID

  apiKey:"AIzaSyAVRu73AY3aAIRxW9PSjFfLOO1KL0CGfPQ",
  authDomain: "project-4053803933251995461.firebaseapp.com",
  databaseURL: "https://project-4053803933251995461-default-rtdb.firebaseio.com",
  projectId: "project-4053803933251995461",
  storageBucket: "project-4053803933251995461.appspot.com",
  messagingSenderId: "841288400820",
  appId: "1:841288400820:web:ace0f8caf6c7c8a02e7ce1",
  measurementId: "G-H548K2DHZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
