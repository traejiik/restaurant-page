function menuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("container");

    // west section
    const westF = document.createElement("section");
    const westList = document.createElement("ul");
    for (const meal of westMenu) {}

    // south section
    const southF = document.createElement("section");
    const southList = document.createElement("ul");
    for (const meal of southMenu) {}

    // east section
    const eastF = document.createElement("section");
    const eastList = document.createElement("ul");
    for (const meal of eastMenu) {}

    // menu objects
    const westMenu = [{},{},{}];

    const southMenu = [{},{},{}];

    const eastMenu = [{},{},{}];


    // appending
        // to west
    westF.appendChild();

        // to south
    southF.appendChild();

        // to east
    eastF.appendChild();

        // to container
    menuContainer.appendChild(westF);
    menuContainer.appendChild(southF);
    menuContainer.appendChild(eastF);

    return menuContainer;
}

export { menuPage };