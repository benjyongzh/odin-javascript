
export default function aboutContentComponent(aboutItems) {
    const main = document.createElement('div');
    main.classList.add("about-content");
    // console.log(Object.keys(menuItems));
    
    /* Object.entries(menuItems).forEach(entry => {
      const [category, foodSet] = entry;
      main.appendChild(menuCategoryComponent(category, foodSet));
    }); */
  
    return main;
  }