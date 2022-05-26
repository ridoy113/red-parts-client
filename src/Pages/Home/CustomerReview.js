import React from 'react';

const CustomerReview = ({ rating }) => {
    return (
        <div className=' text-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure>

                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={rating.img} />
                        </div>
                    </div>


                </figure>
                <div class="card-body">
                    <h2 class="text-3xl">{rating.name}</h2>
                    <p className='text-xl'>Email: {rating.email}</p>
                    <p>{rating.comments}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;