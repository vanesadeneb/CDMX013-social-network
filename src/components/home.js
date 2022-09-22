import {
  auth, publish, onGetPost,
} from '../lib/firebase.js';
import { signout } from './signOut.js';

export const home = () => {
  const divContainer = document.createElement('div');
  const header = document.createElement('header');
  const logoHome = document.createElement('img');
  const logout = document.createElement('button');
  const sectionContainer = document.createElement('section');
  const postForm = document.createElement('form');
  const nameUser = document.createElement('h1');
  const writeComment = document.createElement('textarea');
  const errorCharacters = document.createElement('p');
  const shareButton = document.createElement('button');
  const comment = document.createElement('section');

  divContainer.setAttribute('id', 'body-home');
  header.setAttribute('id', 'header');
  logoHome.src = '../imgs/logo2.png';
  logoHome.setAttribute('id', 'logo-home');
  logout.textContent = 'Log out';
  logout.setAttribute('id', 'logout');
  sectionContainer.setAttribute('class', 'section-home');
  postForm.setAttribute('class', 'section-home');
  nameUser.setAttribute('id', 'name-user');
  writeComment.setAttribute('id', 'post-container');
  writeComment.setAttribute(
    'placeholder',
    'Share something less than 300 characters with the community ...',
  );
  writeComment.setAttribute('maxlength', 299);
  shareButton.textContent = 'Share';
  shareButton.setAttribute('id', 'share');

  header.append(logoHome, logout);
  postForm.append(nameUser, writeComment, errorCharacters, shareButton);
  sectionContainer.append(postForm, comment);

  logout.addEventListener('click', () => {
    signout();
  });

  const user = auth.currentUser;
  nameUser.textContent = `Welcome ${user.email} !`;

  onGetPost((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      html += `
          <article class="post-content">
          <div class= "container-header-post">
            <img id= "profile-home" src="../imgs/profile.png" alt="Profile Image">
            <h2 id ="header-post">${postData.user}</h2>
            <span id="delete-edit">
              <i class="fa-sharp fa-solid fa-trash"></i>
              <i class="fa-sharp fa-solid fa-pencil"></i>
            </span>
          </div>
          <p class="post-user">${postData.posts}</p>
          <div class = "like-comment">
            <i class="fa-regular fa-heart"></i>
            <p>Like</p>
            <img class ="comment-img" src="../imgs/comment.png" alt="Profile Image">
            <p>Comment</p>
          </div>
          </article>
          `;
    });
    comment.innerHTML = html;
  });

  shareButton.addEventListener('click', (e) => {
    e.preventDefault();
    const postUser = postForm['post-container'];
    const userID = user.email;
    publish(postUser.value, userID);
    postForm.reset();
  });

  divContainer.append(header, sectionContainer);
  return divContainer;
};
