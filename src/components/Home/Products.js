import React from 'react';

const Products = () => {
    return (
        <div id='features'>
            <div class="hero mt-28 mb-10">
                <div class="hero-content flex-col lg:flex-row">
                    {/* slide start  */}
                    <div class="carousel w-full">
                        <div id="slide10" class="carousel-item relative w-full">
                            <img src="https://i.ibb.co/WvGgBfF/acer-1.jpg" class="w-full" data-aos="fade-up"
                            data-aos-duration="900"/>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide12" class="btn btn-circle">❮</a>
                                <a href="#slide11" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide11" class="carousel-item relative w-full">
                            <img src="https://i.ibb.co/TY0hVYJ/acer-2.jpg" class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" class="btn btn-circle">❮</a>
                                <a href="#slide12" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide12" class="carousel-item relative w-full">
                            <img src="https://i.ibb.co/tcQw6D7/acer-3.jpg" class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" class="btn btn-circle">❮</a>
                                <a href="#slide13" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide13" class="carousel-item relative w-full">

                            <div className='flex items-center justify-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NNTej5ZbgUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide12" class="btn btn-circle">❮</a>
                                <a href="#slide10" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    {/* slide end */}
                    <div></div>
                    <div>
                        <h1 class="text-3xl font-bold" data-aos="fade-up"
                data-aos-duration="900">Acer Nitro 5 AN515-44 AMD Ryzen 7 4800H GTX 1650Ti 4GB Graphics 15.6 144Hz FHD Gaming Laptop</h1>
                        <h2 className='text-2xl my-4 font-bold'>Features:</h2>
                        <p><strong>MPN:</strong> NH.Q9NSI.002</p>
                        <p><strong>Model: </strong> Acer Nitro 5 AN515-44 GTX 1650Ti</p>
                        <p><strong>Processor: </strong> AMD Ryzen 7 4800H Processor (8MB Cache, 2.9GHz up to 4.2GHz)</p>
                        <p><strong>Ram:</strong> 16 GB RAM</p>
                        <p><strong>Storage:</strong> 256GB SSD + 1TB HDD</p>
                        <p><strong>Display:</strong> 15.6 144Hz Full HD Display</p>
                        <button class="btn btn-primary btn-outline rounded-none px-10 my-4" data-aos="zoom-in"
                        data-aos-duration="900">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;