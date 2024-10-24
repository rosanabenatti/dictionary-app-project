import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  // Handle the dictionary API response
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  // Handle the Pexels API response (for images)
  function handlePexelsResponse(response) {
    console.log(response.data); // This will display the images in the console for now
  }

  // Search both the dictionary and Pexels APIs
  function search(event) {
    event.preventDefault();

    // Dictionary API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse); // Corrected to use handleResponse

    // Pexels API for images
    let pexelsApiKey =
      "VwnVtqLMtKa0sxV0ef6MzVeUUTw7mKhR1Zg8Nzk3m10xtn7V93fBm0py";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`; // Fetch 4 images
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  // Handle input change
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
          />
        </form>
        <div className="hint">
          Suggested words: sunset, wine, yoga, forest...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
