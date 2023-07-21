import React from 'react';
import banner from '../assets/images/banner.jpeg';
import profile from '../assets/images/profile.jpg'

const About = () => {
    return (
        <div className="glassy mx-auto mt-5 about p-5">
            <div className="px-auto d-flex justify-content-center pic-container">                
                <img src={banner}  className="banner-pic"/>
                <img src={profile} className="profile-pic" />
            </div>
        </div>
    );
};

export default About;