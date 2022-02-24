import { initializeApp } from "firebase/app";
import {
  getDatabase
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqBpvONtKLfTtpmaHWIUiqNRCbKEXVRrM",
  authDomain: "expensify-92a00.firebaseapp.com",
  databaseURL: "https://expensify-92a00-default-rtdb.firebaseio.com",
  projectId: "expensify-92a00",
  storageBucket: "expensify-92a00.appspot.com",
  messagingSenderId: "270651308261",
  appId: "1:270651308261:web:cfe299b0433ac57d13bc0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database as default };
