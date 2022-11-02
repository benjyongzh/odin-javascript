
export default function contactContentComponent(contactItems) {
    const main = document.createElement('div');
    main.classList.add("contact-content");
    // console.log(Object.keys(menuItems));

    //title
      const title = document.createElement('div');
      title.classList.add('contact-title');
      title.textContent = "Reach out to us!";
      main.appendChild(title);

    

    Object.entries(contactItems).forEach(entry => {
      const [category, text] = entry;
      const infobox = document.createElement('div');
      infobox.classList.add('contact-infobox');
      infobox.setAttribute('id', category);

      //category
      const categoryInfo = document.createElement('div');
      categoryInfo.classList.add('contact-info-category');
      categoryInfo.textContent = category;
      infobox.appendChild(categoryInfo);

      //text
      const textInfo = document.createElement('div');
      textInfo.classList.add('contact-info-text');
      textInfo.textContent = text;
      infobox.appendChild(textInfo);

      main.appendChild(infobox);
    });
  
    return main;
  }