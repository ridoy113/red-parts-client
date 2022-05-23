import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Brand from './Brand';
import BusnissSummary from './BusnissSummary';
import HypeProducts from './HypeProducts';
import Img from './Img';
import Info from './Info';
import Steps from './Steps';
import Warning from './Warning';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Steps></Steps>
            <HypeProducts></HypeProducts>
            <Warning></Warning>
            <BusnissSummary></BusnissSummary>
            <Info></Info>
            <Brand></Brand>
            <Img></Img>
            <Footer></Footer>
        </div>
    );
};

export default Home;