import React from 'react';
import './App.css';
import  AboutUs  from './container/AboutUs/AboutUs';
import  SpecialMenu  from './container/Menu/SpecialMenu';
import  History  from './container/History/History';
import Intro from './container/Intro/Intro';
import Gallery from './container/Gallery/Gallery';
import  FindUs  from './container/Findus/FindUs';
import  Footer  from './container/Footer/Footer';
import  Navbar  from './components/Navbar/Navbar';
import  Header from './container/Header/Header';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <History/>
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
