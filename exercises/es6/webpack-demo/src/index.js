// import _ from 'lodash';
import {myName} from './myName';
import './style.css';
import Photo from './my-image.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.textContent = myName("Cody");
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = Photo;

  element.appendChild(myImage);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());