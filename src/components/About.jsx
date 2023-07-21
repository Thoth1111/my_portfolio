import React from 'react';
import banner from '../assets/images/banner.jpeg';
import profile from '../assets/images/profile.jpg'

const About = () => {
    return (
        <div className="glassy rounded mx-auto mt-5 about">
            <div className="mx-auto d-flex" style={{position: 'relative'}}>
                <img src={profile} className="profile-pic" />
                <img src={banner}  className="banner-pic"/>
            </div>
        </div>
    );
};

export default About;