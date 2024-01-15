let goTopButton = document.querySelector(".gtbutton");
let topSection = document.querySelector("#home");
let navBar = document.querySelector(".navbar");
let openNavBarButton = document.querySelector(".open-navbar");
let closeNavBarButton = document.querySelector(".close-navbar");

const heroPicture = document.getElementById("small-landing-picture");
if (heroPicture) heroPicture.fetchPriority = "high";

window.onscroll = function onScroll() {
  if (goTopButton) {
    //makes goTopButton appear or disappear
    if (window.scrollY > 100) {
      goTopButton.classList.add("active");
    } else {
      goTopButton.classList.remove("active");
    }
  
    //makes navBar close on scroll
    if (navBar.classList.contains("open")) {
      navBar.classList.add("close");
      navBar.classList.remove("open");
    }
  }
};

const navbarButton = document.getElementById("navbar-button");
if (navbarButton)
navbarButton.addEventListener("click", (e) => setNavbarState(e.target));

//open and close navbar
function setNavbarState(target){
    if (target.name == "menu-sharp") {
    navBar.classList.remove("close");
    navBar.classList.add("open");
  }
  if (
    target.name == "close-sharp" ||
    target.name == "navbar-ancors"
  ) {
    navBar.classList.add("close");
    navBar.classList.remove("open");
  }
}
