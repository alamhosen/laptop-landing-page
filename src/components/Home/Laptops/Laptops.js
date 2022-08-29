import React, { useEffect, useState } from 'react';
import Laptop from './Laptop';

const Laptops = () => {
    const [laptops, setLaptops] = useState([])

    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    return (
        <div id='shop'>
            <h2 className='text-center text-3xl lg:text-5xl md:text-4xl font-bold'>Buy Your Favorite Laptop</h2>
            <div className='px-10'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                    {
                        laptops.map(laptop => <Laptop
                        key={laptop._id}
                        laptop={laptop}
                        ></Laptop>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Laptops;