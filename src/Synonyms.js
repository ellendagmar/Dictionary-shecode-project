import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms.synonyms);
  if (props.synonyms.synonyms != null) {
    return (
      <div>
        {" "}
        <strong>Synonyms: </strong>
        <ul>
          {props.synonyms.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
