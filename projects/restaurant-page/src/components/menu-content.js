//import menuItemComponent from './menu-item.js';
import menuCategoryComponent from './menu-category.js';

export default function menuContentComponent(menuItems) {
    const main = document.createElement('div');
    main.classList.add("menu-content");
    console.log(menuItems);
    
    menuItems.forEach(category => {
      main.appendChild(menuCategoryComponent(category));
      //main.appendChild(menuItemComponent());
    });
  
    return main;
  }