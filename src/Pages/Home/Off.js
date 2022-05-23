import React from 'react';
import off1 from '../../img/off1.png'
import off2 from '../../img/off2.png'

const Off = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-20 my-24'>
            <div class="card">
                <div class="card-body">
                    <img src={off1} alt="" />
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <img src={off2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Off;