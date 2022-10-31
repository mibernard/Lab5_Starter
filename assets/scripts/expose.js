// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO

  // Add event listener for when the horn selector element changes
  const hornSelector = document.getElementById("horn-select");
  hornSelector.addEventListener("change", (event) => {
    // Current value of horn selector
    const hornType = event.target.value;
    // Default image and audio sources
    let hornSource = "assets/images/no-image.png";
    let audioSource = "";
    // Change image and audio sources based on selector
    switch (hornType) {
      case "air-horn":
        hornSource = "assets/images/air-horn.svg";
        audioSource = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornSource = "assets/images/car-horn.svg";
        audioSource = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornSource = "assets/images/party-horn.svg";
        audioSource = "assets/audio/party-horn.mp3";
        break;
    }
    // Update image and audio elements with new sources
    document.querySelector("#expose img").src = hornSource;
    document.querySelector("#expose audio").src = audioSource;
  });

  let volumeSlider = document.getElementById("volume");
  let volSource = document.querySelector(
    "[src = 'assets/icons/volume-level-2.svg']"
  );

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
