import React from 'react';
import { GoalsBanner } from './GoalsBanner';
// import ExploreBanner from './Explore/ExploreBanner';
import { SocialBanner } from './SocialBanner';
import { ExploreBanner } from './ExploreBanner';

function Homepage() {
  return (
    <div>
      <ExploreBanner />
      <GoalsBanner />
      <SocialBanner />
    </div>
  );
}

export default Homepage;
