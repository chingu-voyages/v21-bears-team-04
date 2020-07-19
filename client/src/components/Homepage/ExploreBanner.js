import React from "react";
import "./ExploreBanner.css";

function ExploreBanner() {
  return (
    <div className="ExploreBanner">
      <div className="Banner-description">
        <h1>
          Fitness starts with <br />
          not just you
        </h1>
        <br/>
        <h3 className="Banner-subdescription">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </h3>
        <br/>
        <button className="Banner-button">Explore</button>
        <br/>
      </div>
      <div className="Banner-images"></div>
    </div>
  );
}

export default ExploreBanner;
