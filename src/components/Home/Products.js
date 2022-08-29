import React from 'react';

const Products = () => {
    return (
        <div id='features'>
            <div className="mt-28 mb-10 mx-12">
                <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                    {/* slide start  */}
                    <div className="carousel w-full">
                        <div id="slide10" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/WvGgBfF/acer-1.jpg" className="w-full" data-aos="fade-up"
                            data-aos-duration="900"/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide12" className="btn btn-circle">❮</a>
                                <a href="#slide11" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide11" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/TY0hVYJ/acer-2.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" className="btn btn-circle">❮</a>
                                <a href="#slide12" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide12" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/tcQw6D7/acer-3.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" className="btn btn-circle">❮</a>
                                <a href="#slide13" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide13" className="carousel-item relative w-full">

                            <div className='flex items-center justify-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NNTej5ZbgUs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide12" className="btn btn-circle">❮</a>
                                <a href="#slide10" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    {/* slide end */}
                    <div>
                        <h1 className="text-2xl lg:text-4xl md:text-4xl  font-bold" data-aos="fade-up"
                data-aos-duration="900">Acer Nitro 5 AN515-44 AMD Ryzen 7 4800H GTX 1650Ti 4GB Graphics 15.6 144Hz FHD Gaming Laptop</h1>
                        <h2 className='text-2xl my-4 font-bold'>Features:</h2>
                        <p><strong>MPN:</strong> NH.Q9NSI.002</p>
                        <p><strong>Model: </strong> Acer Nitro 5 AN515-44 GTX 1650Ti</p>
                        <p><strong>Processor: </strong> AMD Ryzen 7 4800H Processor (8MB Cache, 2.9GHz up to 4.2GHz)</p>
                        <p><strong>Ram:</strong> 16 GB RAM</p>
                        <p><strong>Storage:</strong> 256GB SSD + 1TB HDD</p>
                        <p><strong>Display:</strong> 15.6 144Hz Full HD Display</p>
                        <button className="btn btn-primary btn-outline rounded-none px-10 my-4" data-aos="zoom-in"
                        data-aos-duration="900">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;