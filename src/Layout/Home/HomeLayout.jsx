import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUs from './AboutUs';
import Choose from './Choose';
import Slider from './Slider';
import Introduction from './Introduction';
import AboutMe from './AboutMe';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Home | EstateLink</title>
            </Helmet>
            
            <Introduction></Introduction>

            <AboutMe></AboutMe>
            {/* <Slider></Slider> */}
            <AboutUs></AboutUs>
            <Choose></Choose>
            
        </div>
    );
};

export default HomeLayout;