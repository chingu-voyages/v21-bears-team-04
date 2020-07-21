import React from 'react';
import GoalsBanner from './Goals/GoalsBanner';
import ExploreBanner from './Explore/ExploreBanner';
import SocialBanner from './Social/SocialBanner';

import { PublicLayout } from '../layout/PublicLayout';

function Homepage() {
  return (
    <PublicLayout>
      <div className="Homepage">
        <ExploreBanner />
        <GoalsBanner />
        <SocialBanner />
      </div>
    </PublicLayout>
  );
}

export default Homepage;
