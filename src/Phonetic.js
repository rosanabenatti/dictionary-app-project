import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="Phonetic-container">
          {/* First column: the audio button */}
          <div className="Phonetic-audio">
            <button
              onClick={() => {
                const audio = new Audio(props.phonetic.audio);
                audio.play();
              }}
            >
              🔊
            </button>
          </div>
          {/* Second column: the word and the phonetic transcription */}
          <div className="Phonetic-text">
            <div className="word">{props.word}</div>
            <div className="transcription">{props.phonetic.text}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <span>{props.phonetic.text}</span>;
  }
}
