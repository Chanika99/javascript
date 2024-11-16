'use strict';

const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');

for (let i = 0; i < names.length; i ++) {
  let listItem = document.createElement('li');
    listItem.textContent = names[i];
    target.appendChild(listItem);
}
