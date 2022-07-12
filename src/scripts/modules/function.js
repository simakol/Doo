import AOS from "aos";
import SmoothScroll from "smooth-scroll";

export const isWebp = () => {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
};

export const featuresToggle = () => {
  const button = document.getElementById("viewAllBtn");
  button.addEventListener("click", featuresButtonClick);
};
export const burgerMenuToggle = () => {
  const button = document.querySelector(".burger-menu");
  button.addEventListener("click", burgerMenuClick);
};

export const initAOS = () => {
  AOS.init({
    duration: 300,
    easing: "ease-in-cubic",
    once: true,
  });
};

//functions

function featuresButtonClick(e) {
  const { target } = e;
  const hiddenContainer = document.getElementById("hiddenFeaturesContainer");
  e.preventDefault();

  const scroll = new SmoothScroll();

  hiddenContainer.attributes["data-show-content"].value =
    hiddenContainer.attributes["data-show-content"].value === "false"
      ? "true"
      : "false";
  if (hiddenContainer.attributes["data-show-content"].value === "true") {
    target.textContent = "Hide all features";
    document.body.offsetWidth >= 768
      ? scroll.animateScroll(document.querySelector("#viewAllBtn"))
      : scroll.animateScroll(document.querySelector("#hiddenFeaturesCenter"));
  } else {
    target.textContent = "view all features";
    scroll.animateScroll(document.querySelector("#featuresTop"));
  }
}

function burgerMenuClick(e) {
  const button = document.querySelector(".burger-menu");
  const closeMenu = () => {
    button.classList.remove("open");
    document.body.style.overflow = "auto";
  };
  if (button.classList.contains("open")) {
    closeMenu();
  } else {
    button.classList.add("open");
    document.body.style.overflow = "hidden";
    const menu = document.querySelector(".nav-menu");
    menu.addEventListener("click", ({ target }) =>
      closeMobileMenuOnClick(target, closeMenu)
    );
  }
}

function closeMobileMenuOnClick(target, closeMenu) {
  if (!target.classList.contains("nav-menu-item")) closeMenu();
}
