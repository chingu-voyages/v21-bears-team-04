import React from 'react';
import './SocialBanner.css';
import insta1 from './insta1.jpg';
import insta2 from './insta2.jpg';
import insta3 from './insta3.jpg';
import insta4 from './insta4.jpg';

const photos = [insta1, insta2, insta3, insta4];

function SocialBanner() {
  return (
    <div className="SocialBanner">
      <h1 className="SocialBanner-title">Show your sweat</h1>
      <div className="SocialBanner-feed">
        {photos.map((photo, index) => (
          <img
            key={index}
            className="SocialBanner-images"
            src={photo}
            alt="Fitx social media posts"
          />
        ))}
      </div>
    </div>
  );
}

export default SocialBanner;
