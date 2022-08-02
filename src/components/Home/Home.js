import React from 'react';
import ContactUs from '../Shared/ContactUs';
import GamingLaptop from './GamingLaptop';
import Laptops from './Laptops/Laptops';
import Products from './Products';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <GamingLaptop></GamingLaptop>
            <Laptops></Laptops>
            <Products></Products>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;