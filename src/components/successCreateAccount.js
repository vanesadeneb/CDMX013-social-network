import { onNavigate } from '../main.js';

export const check = () => {
    /*
    const checkmark = document.createElement('div');
    const checkIcon = document.createElement('div');
    const iconLine = document.createElement('span');
    const iconLineLong = document.createElement('span');
    const circle = document.createElement('div');
    const iconFix = document.createElement('div');
    const message = document.createElement('p');
    const loginButton = document.createElement('button');

    checkmark.setAttribute('class', 'success-checkmark');
    checkIcon.setAttribute('class', 'check-icon"');
    iconLine.setAttribute('class', 'icon-line line-tip');
    iconLineLong.setAttribute('class', 'icon-line line-long');
    circle.setAttribute('class', 'icon-circle');
    iconFix.setAttribute('class', 'icon-fix');
    message.textContent = 'Your account has been created'
    message.setAttribute('id', 'message');
    loginButton.textContent = 'Log in';
    loginButton.setAttribute('class', 'purpleButton');


    checkmark.appendChild(checkIcon);
    checkIcon.append(iconLine, iconLineLong, circle, iconFix, message, loginButton);

    loginButton.addEventListener('click', () => {
        onNavigate('/login');
      });

    return checkmark;
    */
    const div = document.createElement('div');
    div.setAttribute('id', 'container');
    const container = `
    <p id="message">Your account has been created</p>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/> 
    </svg> 
    <button class="purpleButton">Log In</button>
    `;
    div.innerHTML = container;
    return div;
}