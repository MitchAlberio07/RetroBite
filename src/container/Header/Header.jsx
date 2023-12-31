import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Savor the Nostalgia</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Retro Bite Diner, where every visit is a journey back in time. Immerse yourself in the vibrant era of retro charm as you indulge in delicious bites that pay homage to the classics. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img welcome">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
