import React from 'react';
import profile from '../assets/images/profile.jpg';
import Socials from './Socials';

const Profile = () => {
    return (
        <section className="about pt-5">
        <div className="d-flex justify-content-center align-items-center px-auto mt-5 p-5" style={{gap:'15%'}}>
            <img src={profile} className="profile-pic" />
            <h1 className="intro">
            <span style={{color: '#939196'}}>Hey there.<br/></span>
            I'm Alwyn Androvelle,<br/>
            A Full-stack Software Developer
            </h1>            
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center profile mx-auto p-5">                
                {/* <article className="mb-5 pb-5">
                    I'm a former aeronautical (avionics) engineer turned software developer. I can help you build build a product, feature or website. Please take a moment to peruse through some of my past works, experience and skills.
                    I'd be happy tp hear from you if my endeavors resonate with your vision.
                </article> */}
                <Socials />
        </div>
        </section>
    );
};

export default Profile;