function homePage() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container");

    // hero section
    const hero = document.createElement("div");
    hero.classList.add("hero");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Traejiik's African Cuisine";

    hero.appendChild(title);

    homeContainer.appendChild(hero);

    
    // second section
    const about = document.createElement("div");
    about.classList.add("about");
    
    const subAbout1 = document.createElement("div");
    subAbout1.classList.add("about-text");
    const subAbout2 = document.createElement("div");
    subAbout2.classList.add("about-img");

    about.appendChild(subAbout1);
    about.appendChild(subAbout2);

    homeContainer.appendChild(about);


    return homeContainer;
};

export { homePage };