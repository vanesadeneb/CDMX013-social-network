import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAP7rv-LIMUMVmMreOEmYNlxC9pSjGKf4g',
  authDomain: 'women-in-tech-a2721.firebaseapp.com',
  projectId: 'women-in-tech-a2721',
  storageBucket: 'women-in-tech-a2721.appspot.com',
  messagingSenderId: '721813557906',
  appId: '1:721813557906:web:9c3fde9d14410a535ecc4b',
  measurementId: 'G-SQTMTQ0BMC',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// export const publish = (post) => console.log(post);

export const publish = (post) => addDoc(collection(db, 'post'), { post });

export const getPost = () => getDocs(collection(db, 'post'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'post'), callback);
