import React from 'react';
import dateimg from '../../img/date.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const PurchesBanner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={dateimg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker />
                </div>
            </div>
        </div>
    );
};

export default PurchesBanner;