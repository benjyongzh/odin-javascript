export default function imageSliderComponent(options={scrollMode: "click"}){

    const mainDOM = createComponent('div', 'image-slider-container');
    const mainContainer = createComponent('div', 'content-container');
    const scrollButtonLeft = createComponent('button', 'scroll-left');

    scrollButtonLeft.setAttribute("scrollDirection", -1);
    scrollButtonLeft.classList.add('material-symbols-outlined');
    scrollButtonLeft.textContent = "navigate_before";
    const content = createComponent('div', 'image-slider-content');

    const scrollButtonRight = createComponent('button', 'scroll-right');
    scrollButtonRight.setAttribute("scrollDirection", 1);
    scrollButtonRight.classList.add('material-symbols-outlined');
    scrollButtonRight.textContent = "navigate_next";

    const navContainer = createComponent('div', 'nav-container');

    mainDOM.appendChild(mainContainer);
    mainContainer.appendChild(scrollButtonLeft);
    mainContainer.appendChild(content);
    mainContainer.appendChild(scrollButtonRight);
    mainDOM.appendChild(navContainer);

    //scrollMode: "hover" or "click". by default its click
    let scrollMode = options.scrollMode;

    //adding button events
    const buttons = mainContainer.querySelectorAll('button');
    buttons.forEach(button => {
        //for clicking
        button.addEventListener('click', event => scrollButtonClick(event));

        //for mouseover (hovering)
        /* button.addEventListener('mouseover', () => {
            if (scrollMode == "hover") {
                scroll(button.getAttribute('scrollDirection'));
            };
        }); */

        //for mouseout

        //for hovering, how to set speed and intervals etc?
    });

    

    const getFocusInt = () => {
        //get all elements into an array
        let elements = content.querySelectorAll('.imageContainer');
        elements = [...elements];

        //guard clause if there are no elements
        if (elements.length <1) return null;

        //get value of N of the focused element. starts from 0
        for (let j = 0; j < elements.length; j++){
            if (elements[j].classList.contains('focus')){
                return j;
            };
        };
    };

    const getChildrenCount = () => content.children.length;

    const removeAllFocus = () => {
        const elements = content.querySelectorAll('.imageContainer');
        elements.forEach(element => {
            element.classList.remove('focus');
        });
    }

    const makeFocusFromInt = int => {
        removeAllFocus();
        //console.log(int);
        const elements = content.querySelectorAll('.imageContainer');
        const imageDiv = elements.item(int);
        //console.log(imageDiv);
        imageDiv.classList.add('focus');
        imageDiv.scrollIntoView();//needs to be changed to accommodate for smaller image sliders where next image is already within view.
        refreshNavButtons();
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
        addNavButton();
        refreshNavButtons();
    };

    const addNavButton = () => {
        const navButton = createComponent('button', 'nav-button');
        navButton.addEventListener('click', () => {
            const int = getNavButtonInt(navButton);
            makeFocusFromInt(int);
        });
        navContainer.appendChild(navButton);
    };

    const getNavButtonInt = button => {
        //get all buttons
        let buttons = navContainer.querySelectorAll("button");
        buttons = [...buttons];
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] == button) {
                return i;
            };
        };
        console.log('there are no such buttons.');
        return -1;
    };

    const refreshNavButtons = () => {
        offAllNavButtons();
        const button = navContainer.querySelector(`:nth-child(${getFocusInt() + 1})`);
        button.classList.add('nav-button-active');
    };

    const offAllNavButtons = () => {
        const buttons = navContainer.querySelectorAll('.nav-button');
        buttons.forEach(button => {
            button.classList.remove('nav-button-active');
        });
    }

    const scrollButtonClick = event => {
        event.stopPropagation();
        if (scrollMode == "click") {
            const direction = Number(event.target.getAttribute('scrollDirection'));

            //guard clause
            if (direction != -1 && direction != 1) return;

            //guard clause for index out of range
            if (getFocusInt() == 0 && direction != 1) return;
            if (getFocusInt() >= getChildrenCount()-1 && direction!=-1) return;

            makeFocusFromInt(getFocusInt() + Number(direction));
        };
    }

    return {mainDOM, addImage};
};

function createComponent(elementType="div", className="", text=""){
    const element = document.createElement(elementType);
    element.classList.add(className);
    element.textContent = text;
    return element;
};