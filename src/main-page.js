"use strict";

export function mainPage() {
  const pageTitle = document.createElement('h1');
  pageTitle.className = 'page-title';
  pageTitle.textContent = 'Welcome to my chemical restaurant!';

  const navBar = document.createElement('ul');
  const homeSection = document.createElement('li');
  const menuSection = document.createElement('li');
  const aboutSection = document.createElement('li');

  navBar.className = 'nav-bar';
  homeSection.textContent = 'Home';
  menuSection.textContent = 'Menu';
  aboutSection.textContent = 'About';

  navBar.appendChild(homeSection);
  navBar.appendChild(menuSection);
  navBar.appendChild(aboutSection);

  const output = { pageTitle, navBar };
  return output;
}