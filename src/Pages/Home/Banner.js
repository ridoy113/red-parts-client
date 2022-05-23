import React from 'react';
import banner from '../../img/banner.png'

const Banner = () => {
    return (
        <div class="carousel carousel-center">
            <div class="carousel-item">
                <img src={banner} alt="Pizza" />
            </div>


        </div>
    );
};

export default Banner;