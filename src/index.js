import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";
import "./styles.css";

const container = document.getElementById("content");
container.appendChild(homePage());

function eventListeners() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    const buttons = document.querySelectorAll(".header-buttons");

    homeBtn.addEventListener('click', () => {
        container.innerHTML = "";
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

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
};

eventListeners();
console.log("abcded");