import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__bg app__wrapper section__padding" id='about'>
    <div className="app__wrapper_img app__wrapper_img-reverse aboutretro__img">
      <img src={images.aboutretro} alt="restaurant_image" className='retro style'/>
    </div>
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant">About Us</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
        <p className="p__opensans"> Established in 1995, RetroBite Diner was born out of a passion for preserving the spirit of retro Americana.  From the jukebox tunes that echo through the air to the checkerboard floors that welcome you with every step. Every element has been carefully curated to transport you back to the golden days of diners. Come join us at RetroBite, where the past meets the present, and every meal is a voyage through time. Whether you're here for a quick bite, a leisurely brunch, or just to soak in the retro vibes, we welcome you to our corner of nostalgia. Let's make new memories while savoring the flavors of the good old days! </p>
      </div>
    </div>
  </div>
  </div>
);

export default AboutUs;
