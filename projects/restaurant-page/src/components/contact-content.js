
export default function contactContentComponent(contactItems) {
    const main = document.createElement('div');
    main.classList.add("contact-content");
    // console.log(Object.keys(menuItems));
    
    /* Object.entries(menuItems).forEach(entry => {
      const [category, foodSet] = entry;
      main.appendChild(menuCategoryComponent(category, foodSet));
    }); */
  
    return main;
  }