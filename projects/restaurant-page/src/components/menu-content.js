import menuItemComponent from './menu-item.js';

export default function menuContentComponent() {
    const main = document.createElement('div');
    main.classList.add("menu-content");

    main.appendChild(menuItemComponent());
  
    return main;
  }