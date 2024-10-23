import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <button
          onClick={() => {
            const audio = new Audio(props.phonetic.audio);
            audio.play();
          }}
        >
          🔊 Play
        </button>
        <br />
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return <span>{props.phonetic.text}</span>;
  }
}
