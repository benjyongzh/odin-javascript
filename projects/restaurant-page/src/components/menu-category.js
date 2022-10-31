import menuItemComponent from './menu-item.js';

export default function menuCategoryComponent(category) {
    const main = document.createElement('div');
    main.classList.add("menu-category");
    const title = document.createElement('div');
    title.classList.add("menu-category-title");
    title.textContent = menuItems.key;
    main.appendChild(title);

    category.forEach(item => {
      main.appendChild(menuItemComponent(item));
    });
  
    return main;
  }