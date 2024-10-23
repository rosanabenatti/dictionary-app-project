import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="Phonetic-pair">
        {/* Render the audio button */}
        {props.phonetic.audio && (
          <button
            className="Phonetic-audio"
            onClick={() => {
              const audio = new Audio(props.phonetic.audio);
              audio.play();
            }}
          >
            🔊
          </button>
        )}

        {/* Render the phonetic text */}
        {props.phonetic.text && (
          <span className="Phonetic-text">{props.phonetic.text}</span>
        )}
      </div>
    </div>
  );
}
