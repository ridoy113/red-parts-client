import React from 'react';
import parts1 from '../../img/parts1.png'
import parts2 from '../../img/parts2.png'
import parts3 from '../../img/parts3.png'
import HypeProduct from './HypeProduct';

const HypeProducts = () => {
    const hypeProducts = [
        {
            _id: 1,
            name: 'Brandix Spark Plug Kit',
            description: 'Many philosophical debates that began in ancient times are still debated today. In one general sense.',
            img: parts1
        },
        {
            _id: 2,
            name: 'Brandix Clutch Discs ',
            description: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.',
            img: parts2
        },
        {
            _id: 3,
            name: 'Aluminium Wheel',
            description: 'Many philosophical debates that began in ancient times are still debated today. In one general sense.',
            img: parts3
        }
    ];

    return (
        <div className='my-28 mx-20'>
            <div className='text-center text-5xl uppercase'>
                <h2 className='text-primary'>Our Most Hype Product</h2>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    hypeProducts.map(hypeProduct => <HypeProduct
                        key={hypeProduct._id}
                        hypeProduct={hypeProduct}
                    ></HypeProduct>)
                }
            </div>
        </div>
    );
};

export default HypeProducts;