// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  volumeSlider.addEventListener("input", (event) => {
    //let volumeValue = volumeSlider.getAttribute("value");
    let volValue = event.target.value;

    if (volValue > 66)
      volSource.setAttribute("src", "assets/icons/volume-level-3.svg");
    else if (volValue > 33)
      volSource.setAttribute("src", "assets/icons/volume-level-2.svg");
    else if (volValue > 0)
      volSource.setAttribute("src", "assets/icons/volume-level-1.svg");
    else volSource.setAttribute("src", "assets/icons/volume-level-0.svg");
  });
}
