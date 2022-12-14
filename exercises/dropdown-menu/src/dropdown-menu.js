export const dropdownMenu = (title, options={}) => {
    const mainDOM = document.createElement('div');
    mainDOM.classList.add('dropdown-main');

    const mainTitle = document.createElement('div');
    mainTitle.classList.add('dropdown-main-title');
    mainTitle.textContent = title;
    mainDOM.appendChild(mainTitle);

    /* const mainIcon = document.createElement('div');
    mainIcon.classList.add('dropdown-main-icon');
    mainIcon.textContent = 'icon';
    mainDOM.appendChild(mainIcon); */

    const menu = document.createElement('div');
    menu.classList.add('dropdown-menu');

    mainDOM.appendChild(menu);

    const toggleShowMenu = () => {
        menu.classList.toggle('visible');
        mainTitle.classList.toggle('droppedDown');
    };

    const showMenu = bool => {
        bool ? menu.classList.add('visible') : menu.classList.remove('visible');
        bool ? mainTitle.classList.add('droppedDown') : mainTitle.classList.remove('droppedDown');
    };

    const addLink = (title, link="#") => {
        const newLink = createLink(title, link);
        menu.appendChild(newLink);
    }

    let appearOnHover = options.appearOnHover!=undefined ? options.appearOnHover : true;

    let mainLink = options.mainLink!=undefined ? options.mainLink : "#";

    mainTitle.addEventListener('click', () => {
        if (appearOnHover) {
            window.location.href = mainLink;
        } else {
            toggleShowMenu();
        };
    });

    mainDOM.addEventListener('mouseover', () => {
        if (appearOnHover) {
            showMenu(true);
        };
    });

    mainDOM.addEventListener('mouseout', () => {
        if (appearOnHover) {
            showMenu(false);
        };
    });

    return {mainDOM, addLink};
}

const createLink = (text, link) => {
    const anchor = document.createElement('a');
    anchor.classList.add('dropdown-menu-link');
    anchor.href = link;
    anchor.textContent = text;
    return anchor;
}