import "./style.css";

const hamburgerMenu = document.getElementById("hamburger-menu");
const overlayBackground = document.getElementById("overlay-background");
const sidebar = document.getElementById("sidebar");

hamburgerMenu.addEventListener("click", () => {
  overlayBackground.classList.toggle("active");
  sidebar.classList.toggle("active");
});

overlayBackground.addEventListener("click", () => {
  overlayBackground.classList.toggle("active");
  sidebar.classList.toggle("active");
});
