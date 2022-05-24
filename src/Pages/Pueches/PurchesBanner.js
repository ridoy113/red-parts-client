import React from 'react';
import dateimg from '../../img/date.png'

const PurchesBanner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={dateimg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">We Are Only For <br /> <span class="text-5xl font-bold text-primary uppercase">wholesale</span></h1>
                    <p class="py-6 text-xl mr-10">Our parts you can only bye for WHOLESALE. Our parts Minimum quantity for bye 50pic and Maximum quantity for bye 500pic.But you cant bye any single parts. Because our parts make 50pcs of one bundle,and you bye only bundle.</p>
                    <p className='text-red-500'><small>(This section is very important,Please read this before order parts for your Vehicle!)</small></p>
                </div>
            </div>
        </div>
    );
};

export default PurchesBanner;