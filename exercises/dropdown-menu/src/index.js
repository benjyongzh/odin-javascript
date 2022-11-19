import { dropdownMenu } from "./dropdown-menu.js";
import './style.css';

const body = document.querySelector('body');

//const menu = dropdownMenu("hello", {appearOnHover: false});
const menu = dropdownMenu("hello");
menu.addLink("test 1");
menu.addLink("test 2");
menu.addLink("google", "https://www.google.com/");
menu.addLink("leetcode", "https://leetcode.com/");

body.appendChild(menu.mainDOM);