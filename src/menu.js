function menuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("container");

    // west section
    const westF = document.createElement("section");
    const westTitle = document.createElement("h2");
    westTitle.textContent = "West African Menu";
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

        westList.appendChild(menuItm);
    }

    // south section
    const southF = document.createElement("section");
    const southTitle = document.createElement("h2");
    southTitle.textContent = "Southern African Menu";
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

        southList.appendChild(menuItm);
    }

    // east section
    const eastF = document.createElement("section");
    const eastTitle = document.createElement("h2");
    eastTitle.textContent = "East African Menu";
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

        eastList.appendChild(menuItm);
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
    westF.appendChild(westTitle);
    westF.appendChild(westList);

        // to south
    southF.appendChild(southTitle);
    southF.appendChild(southList);

        // to east
    eastF.appendChild(eastTitle);
    eastF.appendChild(eastList);

        // to container
    menuContainer.appendChild(westF);
    menuContainer.appendChild(southF);
    menuContainer.appendChild(eastF);

    return menuContainer;
}

export { menuPage };