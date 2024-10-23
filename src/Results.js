import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {/* Render phonetics directly */}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <Phonetic
                key={index}
                phonetic={phonetic}
                word={props.results.word}
              />
            );
          })}
        </section>

        {/* Render meanings */}
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
