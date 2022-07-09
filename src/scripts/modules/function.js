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

function featuresButtonClick(e) {
  const { target } = e;
  const hiddenContainer = document.getElementById("hiddenFeaturesContainer");
  e.preventDefault();
  hiddenContainer.attributes["data-show-content"].value =
    hiddenContainer.attributes["data-show-content"].value === "false"
      ? "true"
      : "false";

  if (hiddenContainer.attributes["data-show-content"].value === "true")
    target.textContent = "Hide all features";
  else target.textContent = "view all features";
}
