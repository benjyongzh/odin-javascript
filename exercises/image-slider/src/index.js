import "./style.css";
import imageSliderComponent from "./image-slider";

const body = document.querySelector("body");

const carousel = imageSliderComponent();
carousel.addImage("1");
carousel.addImage("2");
carousel.addImage("3");

body.appendChild(carousel.mainDOM);