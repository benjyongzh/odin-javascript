import './style.css';
import headerComponent from './components/header.js';
import menuContentComponent from './components/menu-content';
import contactContentComponent from './components/contact-content';
import aboutContentComponent from './components/about-content';

const app = (() => {

  const tabNames = ['Home', 'Contact', 'About'];
  const menuItems = {
    "Mains": {
      "Aglio Olio": "Some delicious shit right here.",
      "Chicken Rice": "Bro you can't go wrong with this standard dish.",
      "Chicken Chop": "You wanna get dem gains or not?",
    },
    "Desserts": {
      "Lava Cake": "Warm and cold at the same time. You love it.",
      "Chendol": "Bad news: my wife isn't a fan. Good news: you're not my wife, so get this.",
    }
  };
  
  const contactItems = {
    "Who we are": "Get Fat Here",
    "Where we are": "248 Henderson Road, #01-24, Singapore 589248",
    "Call us at": "+65 68120552",
  };
  
  const aboutItems = {
    "title": "Who we are",
    "text": "Have you ever wished you were fat? Tired of being on the side of society without fat privilege? Are you bullied for having a healthy and beautiful physique? Come on down to Get Fat Here, where you can... get fat here! No judgement on your looks and stature. We are all here to eat to our hearts content. We are open 24/7, because stomachs don't need a break.",
  };
  
  const main = document.querySelector(".content");
  
  //menu
  const menu = menuContentComponent(menuItems);
  //main.appendChild(menu);
  
  //contact
  const contact = contactContentComponent(contactItems);
  //main.appendChild(contact);
  
  //about
  const about = aboutContentComponent(aboutItems);
  //main.appendChild(about);
  
  //header with tabs
  const header = headerComponent(tabNames);
  main.appendChild(header);
  const menuTab = header.querySelector(`#${tabNames[0]}`);
  menuTab.addEventListener('click', () => {
    tabClicked(menu);
  });
  const ContactTab = header.querySelector(`#${tabNames[1]}`);
  ContactTab.addEventListener('click', () => {
    tabClicked(contact);
  });
  const AboutTab = header.querySelector(`#${tabNames[2]}`);
  AboutTab.addEventListener('click', () => {
    tabClicked(about);
  });
  
  
  function tabClicked(content) {
    main.replaceChild(content, main.lastChild);
  }

  const init = () => {
    main.appendChild(menu);
  }

  return {
    init
  }
})();


app.init();