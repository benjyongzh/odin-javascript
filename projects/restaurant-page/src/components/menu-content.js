//import menuItemComponent from './menu-item.js';
import menuCategoryComponent from './menu-category.js';

export default function menuContentComponent(menuItems) {
    const main = document.createElement('div');
    main.classList.add("menu-content");
    // console.log(Object.keys(menuItems));
    
    Object.entries(menuItems).forEach(entry => {
      const [category, foodSet] = entry;
      main.appendChild(menuCategoryComponent(category, foodSet));
    });
  
    return main;
  }