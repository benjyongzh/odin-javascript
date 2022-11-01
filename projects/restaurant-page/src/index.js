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
main.appendChild(headerComponent(tabNames));
main.appendChild(menuContentComponent(menuItems));