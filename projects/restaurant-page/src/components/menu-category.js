import menuItemComponent from './menu-item.js';

export default function menuCategoryComponent(category, foodSet) {
    const main = document.createElement('div');
    main.classList.add("menu-category");

    //title of category
    const title = document.createElement('div');
    title.classList.add("menu-category-title");
    title.textContent = category;
    main.appendChild(title);

    //populate category
    Object.entries(foodSet).forEach(entry => {
      const [name, description] = entry;
      main.appendChild(menuItemComponent(name, description));
    });
  
    return main;
  }