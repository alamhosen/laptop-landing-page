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
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">

                    <img src={apple} class="w-full" data-aos="fade-up"
                data-aos-duration="900"/>

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={asus} class="w-full" />
                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={dell} class="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={acer} class="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide5" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" class="carousel-item relative w-full">
                    <img src={hp} class="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide6" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" class="carousel-item relative w-full">
                    <img src={lenovo} class="w-full" />

                    <button className='absolute bottom-0 right-0 text-black btn btn-sm mb-6 mr-6 px-8 rounded-none bg-white text-lg hover:text-white' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;