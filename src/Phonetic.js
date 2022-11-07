import React from "react";

export default function Phonetic(props) {
  function audioSound(event) {
    event.preventDefault(event);

    return alert("audio Sound");
  }

  return (
    <div className="Phonetic d-flex flex-direction-row">
      <div className="audio">
        <button
          class="material-symbols-outlined"
          id="playButton"
          onClick={audioSound}
        >
          play_circle
        </button>
      </div>
      {props.phonetic.text}
    </div>
  );
}
