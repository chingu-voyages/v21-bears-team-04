import React from 'react';
import GoalsBanner from './Goals/GoalsBanner';
import ExploreBanner from './Explore/ExploreBanner';
import SocialBanner from './Social/SocialBanner';

function Homepage() {
  return (x`
    <div className="Homepage">
      <ExploreBanner />
      <GoalsBanner />
      <SocialBanner />
    </div>
  );
}

export default Homepage;
