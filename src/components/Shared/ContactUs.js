import React from 'react';
import contactUs from '../../images/contact-us.png'

const ContactUs = () => {
    return (
        <div className='mb-10' id='contact'>
            <h1 className='text-5xl font-bold text-center'>Let’s chat and get a quote!</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={contactUs} alt="" data-aos="zoom-in"
                data-aos-duration="900"/>
                    <div class="card lg:w-96 w-full shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea  type="text" placeholder="Message" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary" data-aos="fade-up-right"
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