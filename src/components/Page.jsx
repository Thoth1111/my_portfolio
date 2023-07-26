import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';

const Page = () => {

    return (
        <div className="main">
            <Navbar />
            <Profile />
            <About />
        </div>
    );
};

export default Page;