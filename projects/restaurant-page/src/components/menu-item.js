export default function menuItemComponent(item) {
  const main = document.createElement('div');
  main.classList.add("menu-item");
  //img

  //title
  const title = document.createElement('div');
  title.classList.add("menu-item-title");
  title.textContent = item.key;
  main.appendChild(title);
  //text
  const text = document.createElement('div');
  text.classList.add("menu-item-text");
  text.textContent = item.value;
  main.appendChild(text);

  return main;
}