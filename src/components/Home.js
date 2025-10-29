// src/components/Home.js
import React from "react";

function Home({ name, city, image }) {
  return (
    <div id="home">
      <h1>
        {name} is a developer from {city}
      </h1>
      <img src={image} alt={name} />
    </div>
  );
}

export default Home;
