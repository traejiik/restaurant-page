import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const container = document.getElementById("content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener('click', () => {
    container.innerHTML = "";
});

menuBtn.addEventListener('click', () => {
    container.innerHTML = "";
});

aboutBtn.addEventListener('click', () => {
    container.innerHTML = "";
});

console.log("abcded");