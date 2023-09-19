"use strict";

import { mainPage } from "./main-page";
import './style.css';

const { pageTitle, navBar } = mainPage();

document.body.appendChild(pageTitle);
document.body.appendChild(navBar);