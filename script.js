const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navbar-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
