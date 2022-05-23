import React from 'react';
import mypic from '../../img/mypic.jpg';

const BusnissSummary = () => {
    return (
        <div className='text-center my-20'>
            <div className='text-4xl text-accent my-10'>
                <h1>Our Busniss Summary</h1>
            </div>
            <div class="stats shadow">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="">Total Customers</div>
                    <div class="stat-value text-primary">100+</div>
                    <div class="">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="">Annual revenue</div>
                    <div class="stat-value text-secondary">120M+</div>
                    <div class="">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src={mypic} />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value text-primary">50+</div>
                    <div>Parts</div>
                    <div>31 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default BusnissSummary;