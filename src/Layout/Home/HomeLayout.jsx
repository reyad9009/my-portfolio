import React from 'react';
import { Helmet } from 'react-helmet-async';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import ProjectSection from './ProjectSection';
import ContactUs from './ContactUs';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Home | Portfolio</title>
            </Helmet>
            
            <Introduction></Introduction>

            <AboutMe></AboutMe>

            <Skills></Skills>

            <Education></Education>

            <ProjectSection></ProjectSection>
            
            <ContactUs></ContactUs>
        </div>
    );
};

export default HomeLayout;