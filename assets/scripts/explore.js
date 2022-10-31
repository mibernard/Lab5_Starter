// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Create an instance of Speech Synthesis
  const speechSynth = window.speechSynthesis;

  // HTML elements to access or modify
  const voiceSelector = document.getElementById('voice-select');
  const speechText = document.getElementById('text-to-speak');
  const playButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  // Array containing the list of all possible user voices
  var voiceList = [];
  // Load all possible voices for the user
  window.addEventListener('load', (event) => {
    // Populate voiceList array
    voiceList = speechSynth.getVoices();
    // For every voice in voicelist,
    // create an option element and append to voice selector
    for (let i = 0; i < voiceList.length; i++) {
      var newVoice = document.createElement('option');
      newVoice.value = voiceList[i].name;
      newVoice.text = `${voiceList[i].name} (${voiceList[i].lang})`;
      if (voiceList[i].default) {
        newVoice.text += ' - Default';
      }
      voiceSelector.appendChild(newVoice);
    }
  })

  // Play synthesized speech when the play button is clicked
  playButton.addEventListener('click', (event) => {
    // Create an utterance
    let speechUtterance = new window.SpeechSynthesisUtterance(speechText.value);
    for (let i = 0; i < voiceList.length; i++) {
      // Find the selected speech voice to use for the utterance
      if (voiceList[i].name === voiceSelector.value) {
        speechUtterance.voice = voiceList[i];
        break;
      }
    }
    // Make the speech synthesizer speak
    speechSynth.speak(speechUtterance);
    
    // Change the smiling face image to an open smiling face
    faceImage.src = 'assets/images/smiling-open.png';
    // On speech end, set the open smiling face back to normal
    speechUtterance.onend = (event) => {
      faceImage.src = 'assets/images/smiling.png';
    };
  })
}