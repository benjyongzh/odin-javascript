import "./style.css";
import imageSliderComponent from "./image-slider";
import wanaka from './img/wanaka-tree.jpg';
import hookerValley from "./img/hooker-valley.jpg";
import shipwreck from "./img/shipwreck.jpg";


const body = document.querySelector("body");

const carousel = imageSliderComponent();
carousel.addImage("#thatwanakatree", wanaka);
carousel.addImage("Hooker Valley", hookerValley);
carousel.addImage("Shipwreck", shipwreck);

body.appendChild(carousel.mainDOM);