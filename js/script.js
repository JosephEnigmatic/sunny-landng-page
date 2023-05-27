const hamburger = document.querySelector(".header__toggle-btn");
const menu = document.querySelector(".header__mobile-menu");

const toggleMenu = () => {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    menu.classList.add("fade-in");
    menu.classList.remove("fade-out");
  } else {
    menu.classList.add("fade-out");
    menu.classList.remove("fade-in");
  }
};

hamburger.addEventListener("click", toggleMenu);
