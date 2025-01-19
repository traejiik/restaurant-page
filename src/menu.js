function menuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("container");

    // west section
    const westF = document.createElement("section");
    const westList = document.createElement("ul");
    for (const meal of westMenu) {
        const menuItm = document.createElement("li");

        const img = document.createElement("img");
        img.src = meal.img;

        const textCtn = document.createElement("div");
        const title = document. createElement("h3");
        title.textContent = meal.name;
        const desc = document.createElement("p");
        desc.textContent = meal.desc;
        const prc = document.createElement("p");
        prc.textContent = meal.price;

        textCtn.appendChild(title);
        textCtn.appendChild(desc);
        textCtn.appendChild(prc);

        menuItm.appendChild(img);
        menuItm.appendChild(textCtn);
    }

    // south section
    const southF = document.createElement("section");
    const southList = document.createElement("ul");
    for (const meal of southMenu) {
        const menuItm = document.createElement("li");

        const img = document.createElement("img");
        img.src = meal.img;

        const textCtn = document.createElement("div");
        const title = document. createElement("h3");
        title.textContent = meal.name;
        const desc = document.createElement("p");
        desc.textContent = meal.desc;
        const prc = document.createElement("p");
        prc.textContent = meal.price;

        textCtn.appendChild(title);
        textCtn.appendChild(desc);
        textCtn.appendChild(prc);

        menuItm.appendChild(img);
        menuItm.appendChild(textCtn);
    }

    // east section
    const eastF = document.createElement("section");
    const eastList = document.createElement("ul");
    for (const meal of eastMenu) {
        const menuItm = document.createElement("li");

        const img = document.createElement("img");
        img.src = meal.img;

        const textCtn = document.createElement("div");
        const title = document. createElement("h3");
        title.textContent = meal.name;
        const desc = document.createElement("p");
        desc.textContent = meal.desc;
        const prc = document.createElement("p");
        prc.textContent = meal.price;

        textCtn.appendChild(title);
        textCtn.appendChild(desc);
        textCtn.appendChild(prc);

        menuItm.appendChild(img);
        menuItm.appendChild(textCtn);
    }

    // menu objects
    const westMenu = [
        {
            img: as,
            name: "rice",
            desc: "super rice",
            price: "$12"
        },{},{}];

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