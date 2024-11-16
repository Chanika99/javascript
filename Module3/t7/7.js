'use strict'

const trigger = document.getElementById('trigger');
const targetImage = document.getElementById('target');
const originalImageSrc = targetImage.src;
const newImageSrc = 'picB.jpg';

function changeImageOnHover() {
  targetImage.src = newImageSrc;
}
function revertImageOnHover() {
  targetImage.src = originalImageSrc;
}
trigger.addEventListener('mouseover', changeImageOnHover);
trigger.addEventListener('mouseout', revertImageOnHover);