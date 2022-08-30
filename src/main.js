// Este es el punto de entrada de tu aplicacion

import { loadPartialConfigAsync } from '@babel/core';
import { myFunction } from './lib/index.js';
import { start } from './components/start.js';
import { login } from './components/login.js';
import { signUp } from './components/sign-up.js';
import { home } from './components/home.js';



myFunction();

const root = document.getElementById("root");

const routes = {
    '/' : start,
    '/login' : login,
    '/sign-up' : signUp,
    '/home' : home
};

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
   root.removeChild(root.firstChild); 
   root.appendChild(routes[pathname]()); 
}; 