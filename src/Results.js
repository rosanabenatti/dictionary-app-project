import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    // Find the first phonetic with both audio and transcription
    const firstPhoneticWithAudio = props.results.phonetics.find(
      (phonetic) => phonetic.audio && phonetic.text
    );

    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {/* Render the first valid phonetic with audio and transcription */}
          {firstPhoneticWithAudio && (
            <Phonetic
              phonetic={firstPhoneticWithAudio}
              word={props.results.word}
            />
          )}
        </section>

        {/* Loop through meanings */}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
