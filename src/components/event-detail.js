import React from "react";

const Event = ({ artCountry, artCity, artVenue, artDate, ...props }) => {
  return (
    <div>
      <h3>Artist's Event Detail</h3>
      <ul>
        <li>{artCountry}</li>
        <li>{artCity}</li>
        <li>{artVenue}</li>
        <li>{artDate}</li>
      </ul>
    </div>
  );
};

export default Event;
