import React from 'react';
import profile from '../assets/images/profile.jpg';
import Socials from './Socials';

const Profile = ( { darkMode }) => {
    return (
        <section className={`profile pt-5 ${darkMode ? 'dark-mode' : ''}`}>
        <div className="profile-cont px-auto my-5 p-5" style={{gap:'15%'}}>
            <div className="w-5">
                <img src={profile} className="profile-pic" />
            </div>
            <div className="w-5">
                <h1 className="intro">
                <span style={{color: '#939196'}}>Hey there.<br/></span>
                I'm Alwyn Androvelle,<br/>
                A Full-stack Software Developer
                </h1>
            </div>            
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mx-auto p-5">
            <Socials />
        </div>
        </section>
    );
};

export default Profile;