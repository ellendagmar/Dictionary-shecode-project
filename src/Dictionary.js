import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelApiKey = `563492ad6f91700001000001d2cddc0cac15499793ab5bf0a83d2a71`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelApiKey}` },
      })
      .then(handleResponsePexel);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleResponsePexel(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionaryContainer">
      <div className="mainText d-flex flex-direction-row">
        <h1>Dictionary</h1>
        <form onSubmit={search} className="searchbar">
          <input
            type="search"
            className="searchbarInput"
            placeholder="Type a word"
            autoFocus="on"
            onChange={handleKeywordChange}
          />
          <button className="searchbarInputSubmit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
