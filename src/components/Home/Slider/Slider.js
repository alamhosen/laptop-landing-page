import React from 'react';
import apple from '../../../images/slider/apple.jpg'
import acer from '../../../images/slider/acer.jpg'
import asus from '../../../images/slider/asus.jpg'
import dell from '../../../images/slider/dell.jpg'
import hp from '../../../images/slider/hp.jpg'
import lenovo from '../../../images/slider/lenovo.jpg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">

                    <img src={apple} className="w-full" data-aos="fade-up"
                data-aos-duration="900"/>

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={asus} className="w-full" />
                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={dell} className="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={acer} className="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={hp} className="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={lenovo} className="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;