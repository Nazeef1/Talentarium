import React from "react";


function Heading({ title, highlight }) {
  return (
    <div className="heading-landingPage">
      <h1>{title}</h1>
      <h1 className="talentarium-landingPage">{highlight}</h1>
    </div>
  );
}

export default Heading;
