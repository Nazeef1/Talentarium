import React from "react";

interface Props {
  title: string;
  highlight: string;
}

function Heading({ title, highlight }: Props) {
  return (
    <div className="heading-landingPage">
      <h1>{title}</h1>
      <h1 className="talentarium-landingPage">{highlight}</h1>
    </div>
  );
}

export default Heading;
