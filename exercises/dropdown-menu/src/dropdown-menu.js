export const dropdownMenu = (title, options={}) => {
    const main = document.createElement('div');
    main.classList.add('dropdown-main');

    main.textContent = title;

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
        const newLink = createLink(link, title);
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
    anchor.href = link;
    anchor.textContent = text;
    return anchor;
}