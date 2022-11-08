import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning.partOfSpeech) {
    return (
      <div className="Meaning">
        <h3>
          <strong>{props.meaning.partOfSpeech}</strong>
        </h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />

                <em className="exampleText">{definition.example}</em>
              </p>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning} />
      </div>
    );
  } else {
    return null;
  }
}
