'use strict';

const dogs = []

for (let i = 0; i < 6; i++) {
  dogs.push(prompt('Give name for Dog ' + (i + 1)));
}

dogs.sort().reverse();

for (let dog of dogs) {
  document.querySelector('#target').innerHTML += `<li>${dog}</li>`
}


