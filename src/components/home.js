import { onNavigate } from '../main.js';
import {
  auth, publish, getPost, onGetPost,
} from '../lib/firebase.js';

export const home = () => {
  const divContainer = document.createElement('div');
  const header = document.createElement('header');
  const logoHome = document.createElement('img');
  const profileImage = document.createElement('img');
  const logout = document.createElement('button');
  const sectionContainer = document.createElement('section');
  const postForm = document.createElement('form');
  const nameUser = document.createElement('p');
  const writeComment = document.createElement('input');
  const shareButton = document.createElement('button');
  const commentSharedContainer = document.createElement('section');
  const comment = document.createElement('article');

  divContainer.setAttribute('id', 'body-home');
  header.setAttribute('id', 'header');
  logoHome.src = '../imgs/logo2.png';
  logoHome.setAttribute('id', 'logo-home');
  profileImage.src = '../imgs/profile.png';
  profileImage.setAttribute('id', 'profile');
  logout.textContent = 'Log out';
  logout.setAttribute('id', 'logout');
  sectionContainer.setAttribute('class', 'section-home');
  postForm.setAttribute('class', 'section-home');
  nameUser.setAttribute('id', 'name-user');
  writeComment.setAttribute('id', 'post-container');
  writeComment.setAttribute('placeholder', 'Share something with the community...');
  shareButton.textContent = 'Share';
  shareButton.setAttribute('id', 'share');
  // comment.textContent= "Aquí están tus post";

  header.append(logoHome, profileImage, logout);
  postForm.append(nameUser, writeComment, shareButton);
  sectionContainer.append(postForm, comment);

  logout.addEventListener('click', () => {
    onNavigate('/');
  });
  // writeComment text area and shareButton is the btn

  // const user = auth.currentUser;
  // const email = user.email;
  // nameUser.textContent = email;

  window.addEventListener('DOMContentLoaded', async () => {
    onGetPost((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        html += `
          <h3>${nameUser}</h3>
          <p id="post-content">${postData.post}</p>
          `;
      });
      comment.innerHTML = html;
    });
  });

  shareButton.addEventListener('click', (e) => {
    e.preventDefault();
    // const nameUserPost = postForm ['name-user'];
    const postUser = postForm['post-container'];
    if (postUser.value.length < 300) {
      publish(nameUser, postUser.value);
    } else {
      alert('please, write less than 300 characters');
    }

    postForm.reset();
  });

  // shareButton.addEventListener('click', () => {
  //   commentSharedContainer.appendChild(comment.textContent = 'Hola!');
  // });

  divContainer.append(header, sectionContainer);
  return divContainer;
};
