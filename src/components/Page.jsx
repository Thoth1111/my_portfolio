import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import Projects from './Projects';

const Page = () => {

    return (
        <div className="main">
            <Navbar />
            <Profile />
            <About />
            <Projects />
        </div>
    );
};

export default Page;