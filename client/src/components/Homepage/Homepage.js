import React from "react";
import GoalsBanner from "./Goals/GoalsBanner";
import ExploreBanner from "./Explore/ExploreBanner";


function Homepage() {
  return (
    <div className="Homepage">
        <ExploreBanner/>
        <GoalsBanner/>
    </div>
  );
}

export default Homepage;
