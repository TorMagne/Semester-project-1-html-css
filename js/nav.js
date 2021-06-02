const hamburgerButton = document.querySelector(".material-icons");

hamburgerButton.addEventListener("click", () => {
  slideMenu();
});

const slideMenu = () => {
  const menu = document.querySelector(".navigation__list");
  menu.classList.toggle("slide");
};
