import { onNavigate } from '../main.js';

export const login = () => {
  const divContainer = document.createElement('div');
  const logo = document.createElement('img');
  const loginTwitter = document.createElement('img');
  const loginGitHub = document.createElement('img');
  const loginGoogle = document.createElement('img');
  const p = document.createElement('p');
  const boxEmail = document.createElement('textarea');
  const boxPassword = document.createElement('input');
  const loginButton = document.createElement('button');
  const pAccount = document.createElement('p');
  const signUpButton = document.createElement('button');
  const footer = document.createElement('footer');

  logo.src = '../imgs/logo.png';
  loginTwitter.src = '../imgs/twitter.png';
  loginGitHub.src = '../imgs/github.png';
  loginGoogle.src = '../imgs/google.png';
  p.textContent = 'Log in';
  boxEmail.setAttribute('type', 'email');
  boxEmail.placeholder = 'email@something.com';
  boxPassword.setAttribute('type', 'password');
  boxPassword.placeholder = 'password';
  loginButton.textContent = 'Log in';
  pAccount.textContent = ' Do not you have an account yet? Please, ';
  signUpButton.textContent = 'Sign Up';
  footer.textContent = '2022';

  loginButton.addEventListener('click', () => {
    onNavigate('/home');
  });

  signUpButton.addEventListener('click', () => {
    onNavigate('/signUp');
  });

  divContainer.append(logo, loginTwitter, loginGitHub, loginGoogle, p, boxEmail, boxPassword, loginButton, pAccount, signUpButton, footer);

  return divContainer;
};
