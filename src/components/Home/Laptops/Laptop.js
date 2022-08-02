import React from 'react';

const Laptop = ({ laptop }) => {
    const { img1, title, retailPrice, sellPrice, ram, mpn, storage } = laptop

    return (
        <div className='relative'>
            <div className="lg:max-w-lg mt-16">
                <figure><img className='mb-9' src={img1} alt="" data-aos="zoom-in"
                data-aos-duration="900" /></figure>
                <div className="">
                    <h2 className="text-1xl font-bold py-3">{title}</h2>
                    <p>MPN: {mpn}</p>
                    <p className='py-2'>RAM: {ram}</p>
                    <p>Storage: {storage}</p>

                    <div className='flex py-2 '>
                        <p className='mr-8 folt-bold line-through'>${retailPrice}</p>
                        <p className='text-red-400 font-bold '>${sellPrice}</p>
                    </div>
                    <div className='bottom-0 absolute h-1'>
                    <button className='btn btn-outline btn-primary px-10 rounded-none my-5' data-aos="zoom-in"
                data-aos-duration="900">Shop Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Laptop;