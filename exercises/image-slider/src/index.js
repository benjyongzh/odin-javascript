import "./style.css";
import imageSliderComponent from "./image-slider";

const body = document.querySelector("body");

const carousel = imageSliderComponent();
carousel.addImage("#thatwanakatree", "./src/img/wanaka-tree.jpg");
carousel.addImage("Hooker Valley", "./src/img/hooker-valley.jpg");
carousel.addImage("Shipwreck", "src/img/shipwreck.jpg");

body.appendChild(carousel.mainDOM);