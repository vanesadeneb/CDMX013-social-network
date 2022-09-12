import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from '../lib/firebase.js';
const auth = getAuth(app);

  export const createAccount = async (email, password, confirm) => {
    return await createUserWithEmailAndPassword(auth, email, password, confirm);
  };

  export const logIn = async (email, password) => {
    return await signInWithEmailAndPassword(email, password);
  };