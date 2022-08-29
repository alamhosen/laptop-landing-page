import React from 'react';
import contactUs from '../../images/contact-us.png'

const ContactUs = () => {
    return (
        <div className='mb-10 mx-12' id='contact'>
            <h1 className='text-3xl lg:text-5xl md:text-4xl font-bold text-center'>Let’s chat and get a quote!</h1>
            <div className="my-10">
                <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className='lg:order-last md:order-last'>
                    <img src={contactUs} alt="" data-aos="zoom-in"
                data-aos-duration="900"/>
                    </div>
                    <div className="card lg:w-4/5 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea  type="text" placeholder="Message" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" data-aos="fade-up-right"
                data-aos-duration="900">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;