import "./style.css";
import imageSliderComponent from "./image-slider";

const body = document.querySelector("body");

const carousel = imageSliderComponent();

body.appendChild(carousel);