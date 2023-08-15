import React, { useState } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Page = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleAppMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="main">
            <Navbar />
            <Profile />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Page;