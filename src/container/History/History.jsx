import React from 'react';

import { images } from '../../constants';
import './History.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.restau} alt="restaurant_image" className='restau-image'/>
    </div>
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> We believe in blending the best of two eras - the timeless charm of the past and the vibrant energy of the present. </p>
        </div>
        <p className="p__opensans"> Our diner is more than just a place to eat, it's a journey through time, a celebration of nostalgia, and a haven for those who appreciate the classics.Step inside, and you'll find more than just a menu; you'll discover a menu that tells stories. Our chefs craft each dish with the same care and dedication that fueled the diners of the 1950s. Whether it's the sizzle of a classic burger on the grill or the aroma of freshly brewed coffee, every bite is a bite into the past. </p>
      </div>
    </div>
  </div>
);

export default Chef;
