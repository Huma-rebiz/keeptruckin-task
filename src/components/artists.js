import React from "react";

const Artist = ({ imgUrl, name, fbUrl, data, getData, ...props }) => {
  return (
    <div className="artist">
      <div className="artist-img">
        <img src={imgUrl} />
      </div>
      <h4 onClick={getData}>
        Artist Name: {name}
      </h4>
      <a href={fbUrl}>
        {fbUrl}
      </a>
    </div>
  );
};

export default Artist;
