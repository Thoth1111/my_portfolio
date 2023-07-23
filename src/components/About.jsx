import React from 'react';
import banner from '../assets/images/banner.jpeg';
import profile from '../assets/images/profile.jpg';
import Socials from './Socials';

const About = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items center mx-auto about p-5">
            <div className="px-auto d-flex justify-content-center pic-container">                
                <img src={banner}  className="banner-pic"/>
                <img src={profile} className="profile-pic" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center description mx-auto p-5">
                <article>
                    Hey there.<br /> I'm a former aeronautical (avionics) engineer turned software developer. I can help you build build a product, feature or website. Please take a moment to peruse through some of my past works, experience and skills.
                    I'd be happy tp hear from you if my endeavors resonate with your vision.
                </article>
                <Socials />
            </div>
        </div>
    );
};

export default About;