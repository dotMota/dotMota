function changeStylesheet() {
  var currentStylesheet = document
    .querySelector("link[rel='stylesheet']")
    .getAttribute("href");

  if (currentStylesheet === "light.css") {
    document
      .querySelector("link[rel='stylesheet']")
      .setAttribute("href", "dark.css");

    document.querySelector("#mode").style.transform = "rotate(180deg)";
  } else {
    document
      .querySelector("link[rel='stylesheet']")
      .setAttribute("href", "light.css");

    document.querySelector("#mode").style.transform = "rotate(-180deg)";
  }
}
document.querySelector("#mode").addEventListener("click", changeStylesheet);
