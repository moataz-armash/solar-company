const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navbar-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
