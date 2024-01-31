import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const customStyle = {
    color: "firebrick", // Set the color to "firebrick"
  };

  // Update the content and apply the customStyle to the <h1> element
  return (
    <div id="home">
      <h1 style={customStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
