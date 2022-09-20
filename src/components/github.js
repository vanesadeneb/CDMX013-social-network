import { getAuth, GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from '../lib/firebase.js';

const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const githubLogin = async () => {
    const signInGithub = await signInWithPopup(auth, githubProvider);
    return signInGithub;
}