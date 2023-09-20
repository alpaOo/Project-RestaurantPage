"use strict";

import { mainPage } from "./main-page";
import { navHome } from "./nav-home";
import { navMenu } from "./nav-menu";
import { navAbout } from "./nav-about";
import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.getElementById('content');
  const { pageTitle, navBar } = mainPage();

  mainContent.appendChild(pageTitle);
  mainContent.appendChild(navBar);
  mainContent.appendChild(navHome());

  navBar.addEventListener('click', function (e) {
    if (mainContent.lastChild && e.target instanceof HTMLLIElement && mainContent.lastChild instanceof HTMLDivElement) {
      mainContent.removeChild(mainContent.lastChild);
    }
    if (e.target.textContent === 'Home') {
      mainContent.appendChild(navHome());
    } else if (e.target.textContent === 'Menu') {
      mainContent.appendChild(navMenu());
    } else if (e.target.textContent === 'About') {
      mainContent.appendChild(navAbout());
    }
  });
})

