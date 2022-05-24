import React from 'react';
import Footer from '../Shared/Footer';
import AvailableParts from './AvailableParts';
import PurchesBanner from './PurchesBanner';

const Purches = () => {
    return (
        <div>
            <div className='mx-24'>
                <PurchesBanner></PurchesBanner>
                <AvailableParts></AvailableParts>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purches;