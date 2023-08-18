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
        <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
            <Navbar darkMode={darkMode} handleAppMode={handleAppMode}/>
            <Profile darkMode={darkMode}/>
            <About darkMode={darkMode}/>
            {/* <Credentials darkMode={darkMode}/> */}
            <Projects darkMode={darkMode}/>
            <Contact darkMode={darkMode}/>
        </div>
    );
};

export default Page;