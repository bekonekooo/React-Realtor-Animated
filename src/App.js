import React from 'react'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import PhotoBox from "./components/PhotoBox";
import Location from "./components/Location";
import { LanguageProvider } from '../src/Context/LanguageContext';
import Footer from './components/Footer';

function App() {

  return (
    <LanguageProvider>
    <div className="App flex flex-col">     
     <Header></Header>
    <Navbar></Navbar>
    <Slider></Slider>
    <AboutUs></AboutUs>
    <PhotoBox></PhotoBox>
    <Location></Location>      
    <Footer></Footer>
    </div>
    </LanguageProvider>

  );
}

export default App;
