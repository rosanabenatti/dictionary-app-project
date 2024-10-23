import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {/* First row: audio button only (without the word) */}
      <div className="Phonetic-first-row">
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
      </div>

      {/* Second row: phonetic transcription */}
      {props.phonetic.text && (
        <div className="Phonetic-text">{props.phonetic.text}</div>
      )}
    </div>
  );
}
