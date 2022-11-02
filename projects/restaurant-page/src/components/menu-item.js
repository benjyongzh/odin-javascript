// import spaghetti from '../img/spaghetti.jpg';

export default function menuItemComponent(name, description) {
  const main = document.createElement('div');
  main.classList.add("menu-item");

  // //img
  // const image = new Image();
  // image.src = spaghetti;

  //title
  const title = document.createElement('div');
  title.classList.add("menu-item-title");
  title.textContent = name;
  main.appendChild(title);
  //text
  const text = document.createElement('div');
  text.classList.add("menu-item-text");
  text.textContent = description;
  main.appendChild(text);

  return main;
}