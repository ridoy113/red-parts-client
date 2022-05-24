import React, { useEffect, useState } from 'react';
import ByeModal from './ByeModal';
import Part from './Part';

const AvailableParts = () => {
    const [parts, setParts] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div>
            <p className='text-4xl text-primary text-center'>Available Parts On Shop</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 mt-8'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                        setProduct={setProduct}
                    ></Part>)
                }
            </div>
            {product&& <ByeModal 
            product={product}
            setProduct={setProduct}
            ></ByeModal>}
        </div>
    );
};

export default AvailableParts;