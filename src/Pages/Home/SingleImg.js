import React from 'react';

const SingleImg = ({ img }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>

        </div>
    );
};

export default SingleImg;