import './style.css';
import headerComponent from './components/header.js';
import menuContentComponent from './components/menu-content';

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

const main = document.querySelector(".content");

//header with tabs
const header = headerComponent(tabNames);
main.appendChild(header);
const menuTab = header.querySelector(`#${tabNames[0]}`);
menuTab.addEventListener('click', tabClicked);
const ContactTab = header.querySelector(`#${tabNames[1]}`);
ContactTab.addEventListener('click', tabClicked);
const AboutTab = header.querySelector(`#${tabNames[2]}`);
AboutTab.addEventListener('click', tabClicked);

//menu
const menu = menuContentComponent(menuItems);
main.appendChild(menu);

function tabClicked(event) {
  console.log(event);
}