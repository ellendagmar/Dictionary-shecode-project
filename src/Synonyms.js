import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.synonyms) {
    return (
      <div>
        {" "}
        <ul className="synonymsBox">
          {props.synonyms.synonyms.map(function (synonyms, index) {
            return (
              <li className="synonyms" key={index}>
                {synonyms}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
