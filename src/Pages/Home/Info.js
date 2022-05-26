import React from 'react';
import InfoCard from './InfoCard';
import marker from '../../img/marker.svg'
import phone from '../../img/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-40 my-28'>
            <InfoCard
                bgClass="bg-primary"
                info="Abidpour,Bourichong,Comilla,Bangladesh"
                cardTitle="Our Locations" img={marker}></InfoCard>
            <InfoCard
                bgClass="bg-accent"
                info="almamounhridoy113@gmail.com 
                or
                0187077907687"
                cardTitle="Contact Us" img={phone}></InfoCard>
        </div>
    );
};

export default Info;