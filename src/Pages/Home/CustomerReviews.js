import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CustomerReview from './CustomerReview';

const CustomerReviews = () => {
    const { data: ratings, isLoading } = useQuery('ratings', () => fetch('http://localhost:5000/rating ', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-center text-4xl text-primary'>Please Check Our Customer Response</h3>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 m-24 mb-32 gap-8'>
                {
                    ratings.map(rating => <CustomerReview
                        key={rating.id}
                        rating={rating}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;