import "./style.css";
import "tailwind-scrollbar";

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

class MultiScrollShadowManager {
  constructor(containerSelector, shadowSelector) {
    const container = document.querySelector(containerSelector);
    const shadow = document.querySelector(shadowSelector);

    if (!container || !shadow) {
      console.warn(
        `Selector mismatch: ${containerSelector}, ${shadowSelector}`,
      );
      return;
    }

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      shadow.style.display = atBottom ? "none" : "block";
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
  }
}

new MultiScrollShadowManager(
  "#right-panel-one .custom-scrollbar-light",
  "#right-panel-one .custom-scroll-bar-bottom-gradient",
);

new MultiScrollShadowManager(
  "#right-panel-two .custom-scrollbar-light",
  "#right-panel-two .custom-scroll-bar-bottom-gradient",
);

new MultiScrollShadowManager(
  "#right-panel-three .custom-scrollbar-light",
  "#right-panel-three .custom-scroll-bar-bottom-gradient",
);

new MultiScrollShadowManager(
  "#dashboard-content-center-panel .custom-scrollbar-dark",
  "#dashboard-content-center-panel .custom-scroll-bar-bottom-gradient-two",
);
