import { getAuth, GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from '../lib/firebase.js';

const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const githubLoginButton = () => {
    const button = document.createElement('button');
    const githubIcon = document.createElement('i');
    button.textContent = 'Log in with Github';
    button.setAttribute('id', 'githubButton');
    githubIcon.setAttribute('class', 'fa-brands fa-github');

    button.appendChild(githubIcon);

    
    return button;
}

export const githubLogin = async () => {
    const signInGithub = await signInWithPopup(auth, githubProvider);
    return signInGithub;
}