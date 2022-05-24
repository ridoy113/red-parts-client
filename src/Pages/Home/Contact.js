import React from 'react';

const Contact = () => {
    return (
        <div className='text-center bg-accent p-16 m-24'>
            <p className='text-primary font-bold uppercase'>Contact Us</p>
            <h1 className='text-3xl text-white'>Stay connected with us</h1>

            <input type="email" placeholder="Email Address" class="input input-bordered input-secondary w-full max-w-xs mt-5" /><br />

            <input type="text" placeholder="Subject" class="input input-bordered input-secondary w-full max-w-xs mt-2" /><br />

            <textarea type="text" placeholder="Your Message..." class="input input-bordered input-secondary w-full max-w-xs mt-2" /><br />

            <button class="btn btn-primary rounded-none px-16 mt-3 text-white">Submit</button>
        </div>
    );
};

export default Contact;