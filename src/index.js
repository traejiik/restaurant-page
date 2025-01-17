import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const container = document.getElementById("content");
container.appendChild(homePage());

function eventListeners() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");

    homeBtn.addEventListener('click', () => {
        container.innerHTML = '';
        container.appendChild(homePage());
    });
    
    menuBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(menuPage());
    });
    
    aboutBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(aboutPage());
    });
};

eventListeners();
console.log("abcded");