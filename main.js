// Este es el punto de entrada de tu aplicacion
import { start } from './components/start.js';
import { login } from './components/login.js';
import { signUp } from './components/sign-up.js';
import { home } from './components/home.js';

const root = document.getElementById('root');

const routes = {
  '/': start,
  '/login': login,
  '/signUp': signUp,
  '/home': home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const path = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(path());
};

root.appendChild(path());
