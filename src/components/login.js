import { onNavigate } from '../main.js';

export const login = () => {
  const divContainer = document.createElement('div');
  const logo = document.createElement('img');
  const p = document.createElement('p');
  const boxEmail = document.createElement('textarea');
  const boxPassword = document.createElement('input');
  const loginButton = document.createElement('button');
  const pAccount = document.createElement('p');
  const signUpButton = document.createElement('button');
  const loginTwitter = document.createElement('img');
  const loginGitHub = document.createElement('img');
  const loginGoogle = document.createElement('img');
  const footer = document.createElement('footer');

  logo.src = '../imgs/logo.png';
  logo.classList.add('logoTech');
  logo.style.cssText = 'width: 201px; height: 50px; left: 114px;top: 44px; display: flex;';
  p.textContent = 'Log in';
  p.setAttribute('class', 'text');
  boxEmail.setAttribute('type', 'email');
  boxEmail.placeholder = 'email@something.com';
  boxPassword.setAttribute('type', 'password');
  boxPassword.placeholder = 'password';
  loginButton.textContent = 'Log in';
  pAccount.textContent = ' Do not you have an account yet? Please, ';
  signUpButton.textContent = 'Sign Up';
  loginTwitter.src = '../imgs/twitter.png';
  loginGitHub.src = '../imgs/github.png';
  loginGoogle.src = '../imgs/google.png';
  footer.textContent = '2022';

  loginButton.addEventListener('click', () => {
    onNavigate('/home');
  });

  signUpButton.addEventListener('click', () => {
    onNavigate('/signUp');
  });

  divContainer.append(
    logo,
    p,
    boxEmail,
    boxPassword,
    loginButton,
    pAccount,
    signUpButton,
    footer,
    loginTwitter,
    loginGitHub,
    loginGoogle,
  );

  divContainer.setAttribute('class', 'container');

  return divContainer;
};
