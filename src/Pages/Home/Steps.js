import React from 'react';

const Steps = () => {
    return (
        <div className='text-center my-20'>
            <ul class="steps">
                <li data-content="?" class="step step-secondary mx-10">Car Washing</li>
                <li data-content="!" class="step step-secondary">Oil Changing</li>
                <li data-content="✓" class="step step-secondary">Car Parts</li>
                <li data-content="✕" class="step step-secondary">Car Repair</li>
                <li data-content="✓" class="step step-secondary">Bike Parts</li>
                <li data-content="✕" class="step step-secondary">Car Pumping</li>
                <li data-content="?" class="step step-secondary">Car cleaning</li>
            </ul>
        </div>
    );
};

export default Steps;