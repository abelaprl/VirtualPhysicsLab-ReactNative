import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7jiVEry9wX_5b4f8GFr96ke8-ZVex4Vw",
  authDomain: "vlabproject-33d46.firebaseapp.com",
  databaseURL: "https://vlabproject-33d46-default-rtdb.firebaseio.com",
  projectId: "vlabproject-33d46",
  storageBucket: "vlabproject-33d46.appspot.com",
  messagingSenderId: "415904434692",
  appId: "1:415904434692:web:26a6e91b396ec069af0351"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };

export const formatEmail = (email) => email.replace('.', ',');