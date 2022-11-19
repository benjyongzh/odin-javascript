// class dropdownMenu {
//     constructor({appearOnHover, }){
//     }
// }

export const dropdownMenu = (title, options={}) => {
    const main = document.createElement('div');
    main.classList.add('dropdown-main');

    const link = createLink(options.mainLink="#", title);
    main.appendChild(link);

    const menu = document.createElement('div');
    main.classList.add('dropdown-menu');

    main.appendChild(menu);

    const showMenu = () => {
        menu.classList.add('visible');
    };

    let appearOnHover = options.appearOnHover ? options.appearOnHover : true;

    main.addEventListener('click', {
        if (!appearOnHover) {
            showMenu();
        };
    });


    return main;
}

const createLink = (link, text) => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = text;
    return anchor;
}