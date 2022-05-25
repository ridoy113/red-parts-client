import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Brand from './Brand';
import BusnissSummary from './BusnissSummary';
import Contact from './Contact';
import Devider from './Devider';
import Discount from './Discount';
import HypeProducts from './HypeProducts';
import Img from './Img';
import Info from './Info';
import Off from './Off';
import Steps from './Steps';
import Warning from './Warning';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Steps></Steps>
            <HypeProducts></HypeProducts>
            <Warning></Warning>
            <Devider></Devider>
            <BusnissSummary></BusnissSummary>
            <Info></Info>
            <Brand></Brand>
            <Off></Off>
            <Discount></Discount>
            <Img></Img>
            <Contact></Contact>
        </div>
    );
};

export default Home;