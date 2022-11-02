
export default function aboutContentComponent(aboutItems) {
    const main = document.createElement('div');
    main.classList.add("about-content");
    console.log(aboutItems)
    
    Object.entries(aboutItems).forEach(entry => {
      const [title, text] = entry;

      //title
      const titleInfo = document.createElement('div');
      titleInfo.classList.add('about-title');
      titleInfo.textContent = title;
      main.appendChild(titleInfo);

      //text
      const textInfo = document.createElement('div');
      textInfo.classList.add('about-text');
      textInfo.textContent = text;
      main.appendChild(textInfo);
    });
  
    return main;
  }