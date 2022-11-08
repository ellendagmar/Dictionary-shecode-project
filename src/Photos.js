import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Meaning row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="photos col-sm-4" key={index}>
              <img
                src={photo.src.landscape}
                className="photo img-fluid"
                alt={photo.alt}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
