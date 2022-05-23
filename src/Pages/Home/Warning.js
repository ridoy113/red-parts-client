import React from 'react';
import warning from '../../img/warning.png'

const Warning = () => {
    return (
        <div className='mx-40'>
            <div class="">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={warning} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-primary"><span className='text-accent'>This Site For </span><br />  Manufacturer Car Parts🚗 </h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Warning;