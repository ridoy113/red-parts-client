import React from 'react';
import { Link } from 'react-router-dom';

const HypeProduct = ({ hypeProduct }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={hypeProduct.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{hypeProduct.name}</h2>
                <p>{hypeProduct.description}</p>
                <div class="card-actions">

                    <Link to='/purches' class="btn btn-primary rounded-none gap-2">
                        Go For Parches
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HypeProduct;