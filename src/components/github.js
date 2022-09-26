import { getAuth, GithubAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

export const githubLogin = () => { 
signInWithRedirect(auth, githubProvider);
getRedirectResult(auth)
.then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential) {
      const token = result.credential.accessToken;
      onNavigate('/home');
      }
      const user = result.user;
})
.catch(err => {
  console.log(err);
})
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/home');
   /* console.log(user);
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const uid = user.uid;
    console.log(displayName);
    console.log(photoURL);
*/
  }
});