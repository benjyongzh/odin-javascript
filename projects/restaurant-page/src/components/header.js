export default function headerComponent(tabs) {
  //body
  const main = document.createElement('div');
  main.classList.add("header");
  //title
  const title = document.createElement('div');
  title.classList.add("header-title");
  title.textContent = "Eat food here";
  main.appendChild(title);
  //tab button area
  const ul = document.createElement('ul');
  ul.classList.add("tabs");
  main.appendChild(ul);
  //tabs
  for (let i = 0; i < tabs.length; i++){
    const tab = document.createElement('li');
    tab.classList.add("tab");
    const tabButton = document.createElement('button');
    tabButton.classList.add("tabButton");
    tabButton.setAttribute("id", tabs[i]);
    tabButton.textContent = tabs[i];
    tab.appendChild(tabButton);
    ul.appendChild(tab);
    if (i == 0) tab.classList.add("tab-selected");
  }

  return main;
}