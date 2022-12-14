import React from 'react';
import laptop from '../../images/gamingLaptop.jpg'

const GamingLaptop = () => {
    return (
        <div>
            <div className="mx-12 my-4">
                <div className="grid lg:grid-cols-2 items-center justify-center">
                    <div className='lg:order-last'>
                        <img className='' src={laptop} data-aos="fade-up"
                            data-aos-duration="900" />
                    </div>
                    <div className='mb-8'>
                        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold" data-aos="fade-left"
                            data-aos-duration="900">G Series Gaming Laptops</h1>
                        <h2 className='font-bold text-xl mt-3' data-aos="fade-right"
                            data-aos-duration="900">For Essential Gaming Performance Starting at $938.99</h2>
                        <p className="py-6" data-aos="fade-left"
                            data-aos-duration="900">G Series equips you with all the essentials you need to experience split-second responsiveness and immersive gameplay.</p>
                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3'>
                            <div><button className="btn btn-primary rounded-none mb-4 px-12" data-aos="zoom-in"
                                data-aos-duration="900">Shop G Series</button></div>
                            <div><button className="btn btn-outline btn-primary rounded-none px-12" data-aos="zoom-in"
                                data-aos-duration="900">Shop G Series</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamingLaptop;