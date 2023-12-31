import React from 'react';
import MenuItem from '../../components/Menuitem/MenuItem';
import  SubHeading from '../../components/SubHeading/SubHeading';
import { data  } from '../../constants';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Taste of Home</p>
        <div className="app__specialMenu_menu_items">
          {data.menus.map((menu, index) => (
            <MenuItem 
            key={menu.title + index} 
            title={menu.title} 
            price={menu.price} 
            tags={menu.tags}/>
          ))}
          
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
       
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Mocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.mocktails.map((mocktail, index) => (
            <MenuItem
             key={mocktail.title + index} 
             title={mocktail.title}
              price={mocktail.price} 
              tags={mocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
