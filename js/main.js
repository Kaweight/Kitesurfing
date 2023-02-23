const burgerButton = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const allNavItems = document.querySelectorAll(".nav__item");
const navButton = document.querySelector(".burger-btn__bars");
const sections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
  nav.classList.toggle("nav--active");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });

  navButton.classList.remove("black-bars-color");

  handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

const handleNavColor = () => {
  const currentSection = window.scrollY;

  sections.forEach((section) => {
    if (
      section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navButton.classList.add("black-bars-color");
    } else if (
      !section.classList.contains("white-section") &&
      section.offsetTop <= currentSection + 60
    ) {
      navButton.classList.remove("black-bars-color");
    }
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();
burgerButton.addEventListener("click", handleNav);
window.addEventListener("scroll", handleNavColor);
