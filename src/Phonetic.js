import React from "react";
import { Howl } from "howler";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;

  function audioSound(event) {
    event.preventDefault();
    var sound = new Howl({
      src: [audio],
    });
    return sound.play();
  }
  if (audio) {
    return (
      <div className="Phonetic d-flex flex-direction-row">
        <div className="audio">
          <button
            className="material-symbols-outlined"
            id="playButton"
            onClick={audioSound}
          >
            play_circle
          </button>
        </div>
        <div className="phoneticsText">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
