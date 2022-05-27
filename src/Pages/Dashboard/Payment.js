import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L275SFOMMtWukazHdz1KhPdJEB6N1GWFA4reU6i2sVdjcGFqPxkZbhTriMKbPPeRgGnPdqwtnS2WgdT3eSpEIM500Tmpg8BcX');


const Payment = () => {
    const { id } = useParams();
    const url = `https://serene-badlands-91415.herokuapp.com/bye/${id}`;


    const { data: purches, isLoading } = useQuery(['bye', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='mx-6'>
            <div class="card w-50 max-w-md shadow-xl my-12">
                <div class="card-body">

                    <p className='text-violet-400 font-bold'>Hello, {purches.customerName}</p>

                    <h2 class="text-2xl">Your Favourite Product- <span className='text-teal-500'>{purches.part}</span></h2>

                    <p className='text-secondary'><small>Your Product Quantity: {purches.slot}pics</small></p>

                    <p>Please Pay: <span className='text-red-500'>${purches.price}</span></p>

                </div>
            </div>

            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm purches={purches} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;