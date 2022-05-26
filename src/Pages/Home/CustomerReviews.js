import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

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
            <h3 className='text-center text-4xl text-primary'>Please Check Our Customer Response:{ratings.length}</h3>
        </div>
    );
};

export default CustomerReviews;