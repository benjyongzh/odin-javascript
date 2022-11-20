import { dropdownMenu } from "./dropdown-menu.js";
import './style.css';

const body = document.querySelector('body');

//const menu = dropdownMenu("hello", {appearOnHover: false});
const menu = dropdownMenu("hello", {/* appearOnHover: false,  */mainLink: "https://www.google.com/"});
menu.addLink("test 1");
menu.addLink("test 2");
menu.addLink("google", "https://www.google.com/");
menu.addLink("leetcode", "https://leetcode.com/");

body.appendChild(menu.mainDOM);

/* const menu2 = dropdownMenu("hello2");
menu2.addLink("test 3");
menu2.addLink("test 4");
menu2.addLink("google2", "https://www.google.com/");
menu2.addLink("leetcode2", "https://leetcode.com/");

body.appendChild(menu2.mainDOM); */