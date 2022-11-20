export const dropdownMenu = (title, options={}) => {
    const mainDOM = document.createElement('div');
    mainDOM.classList.add('dropdown-main');

    const mainTitle = document.createElement('div');
    mainTitle.classList.add('dropdown-main-title');
    mainTitle.textContent = title;
    mainDOM.appendChild(mainTitle);

    // const link = createLink(options.mainLink="#", title);
    // main.appendChild(link);

    const menu = document.createElement('div');
    menu.classList.add('dropdown-menu');

    mainDOM.appendChild(menu);

    const toggleShowMenu = () => {
        menu.classList.toggle('visible');
    };

    const showMenu = bool => {
        bool ? menu.classList.add('visible') : menu.classList.remove('visible');
    };

    const addLink = (title, link="#") => {
        const newLink = createLink(title, link);
        menu.appendChild(newLink);
    }

    let appearOnHover = options.appearOnHover!=undefined ? options.appearOnHover : true;

    mainDOM.addEventListener('click', () => {
        if (!appearOnHover) {
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