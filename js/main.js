function handleScroll() {
  let scrollPosition = window.scrollY;
  let viewportHeight = window.innerHeight;
  let header = document.querySelector("header");

  if (scrollPosition > viewportHeight) {
    header.style.backgroundColor = "#9c6f42";
  } else if (scrollPosition < viewportHeight) {
    header.style.backgroundColor = "#9c6f4269";
  }
}

window.addEventListener("scroll", handleScroll);

function handleBurgerIcon() {
  let burgerIcon = document.querySelector(".icon");
  let ul = document.querySelector(".links ul");

  let header = document.querySelector("header");
  let currentBgColorOfHeader = window.getComputedStyle(header).backgroundColor;

  console.log("This Feture Developed By Vigo");
  if (burgerIcon.classList.contains("clicked")) {
    // Hendle Header Background
    if (currentBgColorOfHeader != "rgba(156, 111, 66, 0.56)") {
      header.style.backgroundColor = "#9c6f428f";
    }
    // Handle Links
    burgerIcon.classList.remove("clicked");
    ul.style.display = "none";
  } else {
    // Hendle Header Background
    if (currentBgColorOfHeader == "rgba(156, 111, 66, 0.56)") {
      header.style.backgroundColor = "#9c6f42";
    }
    // Handle Links
    burgerIcon.classList.add("clicked");
    ul.style.display = "flex";
  }
}

document.querySelector(".icon").addEventListener("click", handleBurgerIcon);
