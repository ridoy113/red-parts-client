import React from 'react';
import SingleImg from './SingleImg';
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'

const Img = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-20 my-28'>
            <SingleImg img={img1}></SingleImg>
            <SingleImg img={img2}></SingleImg>
            <SingleImg img={img3}></SingleImg>
        </div>
    );
};

export default Img;