import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from '../lib/firebase.js';
export const auth = getAuth(app);

  export const createAccount = async (auth, email, password, confirm) => {
    return await createUserWithEmailAndPassword(auth, email, password, confirm);
  };

  export const logIn = async (auth, email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
