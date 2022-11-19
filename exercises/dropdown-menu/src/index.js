import { dropdownMenu } from "./dropdown-menu.js";
import './style.css';

const body = document.querySelector('body');

//const menu = dropdownMenu("hello", {appearOnHover: false});
const dropdownMenu = dropdownMenu("hello");
dropdownMenu.addLink("test 1");

body.appendChild(dropdownMenu.mainDOM);