"use strict";

export function navHome() {
  const container = document.createElement('div');
  const content = document.createElement('p');

  container.className = 'nav-home-content';
  content.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices mi tempus imperdiet nulla. Scelerisque eleifend donec pretium vulputate. Risus quis varius quam quisque. Sed enim ut sem viverra aliquet eget sit amet. Diam quam nulla porttitor massa id neque aliquam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Eget duis at tellus at urna condimentum mattis pellentesque id. Pellentesque massa placerat duis ultricies lacus sed turpis. Tristique magna sit amet purus gravida. Diam vel quam elementum pulvinar.`;

  container.appendChild(content);
  return container;
}