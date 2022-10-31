import './style.css';
import headerComponent from './components/header.js';
import menuContentComponent from './components/menu-content';

/* function component() {
    const element = document.createElement('.content');
  
    // Lodash, currently included via a script, is required for this line to work
    element.textContent = "Hello this is from index.js";
  
    return element;
  } */

const tabNames = ['Home', 'Contact', 'About'];

document.body.appendChild(headerComponent(tabNames));
document.body.appendChild(menuContentComponent());