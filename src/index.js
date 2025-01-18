import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contentPage } from "./about.js";
import "./styles.css";

const container = document.getElementById("content");
container.appendChild(homePage());

function eventListeners() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const contentBtn = document.querySelector(".content");
    const buttons = document.querySelectorAll(".header-buttons");

    homeBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(homePage());
    });
    
    menuBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(menuPage());
    });
    
    contentBtn.addEventListener('click', () => {
        container.innerHTML = "";
        container.appendChild(contentPage());
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    orderBtnListener();
};

function orderBtnListener() {
    const orderBtn = document.querySelector(".order-button");
    orderBtn.addEventListener('click', () => {
        container.innerHTML =  "";
        container.appendChild(menuPage());
    });
};

eventListeners();