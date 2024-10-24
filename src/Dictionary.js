import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword || "dictionary");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState([]);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSheCodesImageResponse(response) {
    console.log(response);
    setImages(response.data.photos);
  }

  function search() {
    if (!keyword) {
      alert("Please enter a valid keyword!");
      return;
    }

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Dictionary API Error:", error);
      });

    let sheCodesApiKey = "83f9b46743o5b9ba5591000677t89ea4";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios
      .get(sheCodesApiUrl)
      .then(handleSheCodesImageResponse)
      .catch((error) => {
        console.error("SheCodes API Error:", error);
        alert("There was an error fetching the image from SheCodes.");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword || ""}
            />
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, forest...
          </div>
        </section>
        <Results results={results} />
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
