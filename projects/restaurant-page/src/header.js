export default function headerComponent() {
    const element = document.createElement('div');
    element.classList.add("header");
  
    // Lodash, currently included via a script, is required for this line to work
    element.textContent = "I am the header. Look at me.";
  
    return element;
  }