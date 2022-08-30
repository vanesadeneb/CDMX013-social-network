import { onNavigate} from '../main.js';
const start = () => {
    const divContainer = document.createElement("div");
    const logo = document.createElement("img");
    const profileIcon = document.createElement("img");
    const loginButton = document.createElement("button"); 
    const signUpButton = document.createElement("button");
    const slogan = document.createElement("p");
    const imgWomenInTech = document.createElement("img");
    const footer = document.createElement("footer");

    logo.src = "../imgs/logo.png";
    profileIcon.src = "../imgs/profile.png";
    loginButton.textContent = "Login";
    signUpButton.textContent = "Sign Up";
    slogan.textContent = "Empowering Women in Technology";
    imgWomenInTech.src = "../imgs/imageTech.png";
    footer.textContent = "2022";
};