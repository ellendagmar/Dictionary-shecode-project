import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0]);
    console.log(response.data[0].meanings[0].definitions[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
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
    </div>
  );
}
