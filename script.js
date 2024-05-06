const menuBarButton = document.querySelector(".menu-bar");
const mobileNavBar = document.querySelector(".nav-bar-mobile");
const closeNavBar = document.querySelector(".close-button");

closeNavBar.addEventListener("click", () => {
  mobileNavBar.classList.toggle("menu-open");
  menuBarButton.classList.toggle("menu-open");
});

menuBarButton.addEventListener("click", () => {
  mobileNavBar.classList.toggle("menu-open");
  menuBarButton.classList.toggle("menu-open");
});
