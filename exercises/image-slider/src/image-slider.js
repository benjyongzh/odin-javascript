export default function imageSliderComponent(options={scrollMode: "click"}){

    const mainDOM = createComponent('div', 'image-slider-container');
    const scrollButtonLeft = createComponent('button', 'scroll-left');
    scrollButtonLeft.setAttribute("scrollDirection", -1);
    const content = createComponent('div', 'image-slider-content');
    const scrollButtonRight = createComponent('button', 'scroll-right');
    scrollButtonRight.setAttribute("scrollDirection", 1);

    mainDOM.appendChild(scrollButtonLeft);
    mainDOM.appendChild(content);
    mainDOM.appendChild(scrollButtonRight);

    //scrollMode: "hover" or "click". by default its click
    let scrollMode = options.scrollMode;

    //adding button events
    const buttons = mainDOM.querySelectorAll('button');
    buttons.forEach(button => {
        //for clicking
        button.addEventListener('click', () => {
            if (scrollMode == "click") {
                scroll(button.getAttribute('scrollDirection'));
            };
        });

        //for mouseover (hovering)
        /* button.addEventListener('mouseover', () => {
            if (scrollMode == "hover") {
                scroll(button.getAttribute('scrollDirection'));
            };
        }); */

        //for mouseout

        //for hovering, how to set speed and intervals etc?
    });

    //private array of images
    //const imageArray = [];

    const getFocusInt = () => {
        //get all elements into an array
        const elements = content.querySelectorAll('.imageContainer');
        elements = [...elements];

        //guard clause if there are no elements
        if (elements.length <1) return null;

        //get value of N of the focused element
        for (let j = 0; j < elements.length; j++){
            if (elements[j].classList.contains('focus')){
                return j;
            };
        };
    };

    const removeAllFocus = () => {
        const elements = content.querySelectorAll('.imageContainer');
        elements.forEach(element => {
            element.classList.remove('focus');
        });
    }

    const makeFocusFromInt = int => {
        removeAllFocus();
        const imageDiv = content.querySelector(`:nth-child(${int})`);
        imageDiv.classList.add('focus');
    }
    
    const addImage = (text="", src="//:0") => {
        const imageDiv = createComponent('div', 'imageContainer');
        const image = createComponent('img', 'image');
        const imageText = createComponent('div', 'imageText', text);
        image.src = src;
        image.alt = text;
        imageDiv.appendChild(image);
        imageDiv.appendChild(imageText);
        content.appendChild(imageDiv);
        if (content.firstChild == imageDiv){
            imageDiv.classList.add('focus');
        };
    };


    const scroll = directionInt => scrollDirection(directionInt);


    return {mainDOM, addImage, scroll};
};

function createComponent(elementType="div", className="", text=""){
    const element = document.createElement(elementType);
    element.classList.add(className);
    element.textContent = text;
    return element;
};

function scrollDirection(directionInt){
    //guard clause
    if (directionInt != -1 && directionInt != 1) return;

    console.log(`scrolling towards ${directionInt} now.`);

    makeFocusFromInt(getFocusInt() + directionInt);

    //animation for moving DOM elements in certain direction
};