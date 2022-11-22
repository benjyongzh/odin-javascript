export default function imageSliderComponent(){

    const mainDOM = createComponent('div', 'image-slider-container');
    const scrollButtonLeft = createComponent('button', 'scroll-left');
    const content = createComponent('div', 'image-slider-content');
    const scrollButtonRight = createComponent('button', 'scroll-right');

    mainDOM.appendChild(scrollButtonLeft);
    mainDOM.appendChild(content);
    mainDOM.appendChild(scrollButtonRight);

    scrollButtonLeft.addEventListener('click', scroll(-1));
    scrollButtonRight.addEventListener('click', scroll(1));
    
    const addImage = (src, text="") => {
        const imageDiv = createComponent('div', 'imageContainer');
        const image = createComponent('img', 'image');
        const imageText = createComponent('div', 'imageText', text);
        image.src = src;
        image.alt = text;
        imageDiv.appendChild(image);
        imageDiv.appendChild(imageText);
        content.appendChild(imageDiv);
    };


    const scroll = directionInt => scrollDirection(directionInt);


    return {mainDOM, addImage, removeImage, scroll};
};

function createComponent(elementType="div", className="", text=""){
    const element = document.createElement(elementType);
    element.classList.add(className);
    element.textContent = text;
    return element;
};

function scrollDirection(directionInt){
    if (directionInt != -1 && directionInt != 1) return;

    
};