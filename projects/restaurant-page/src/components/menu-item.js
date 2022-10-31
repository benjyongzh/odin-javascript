export default function menuItemComponent() {
  const main = document.createElement('div');
  main.classList.add("menu-item");
  //img

  //title
  const title = document.createElement('div');
  title.classList.add("menu-item-title");
  title.textContent = "Spaghetti";
  main.appendChild(title);
  //text
  const text = document.createElement('div');
  text.classList.add("menu-item-text");
  text.textContent = "Some tasty shit right here.";
  main.appendChild(text);

  return main;
}