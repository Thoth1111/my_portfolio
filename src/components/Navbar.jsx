import React, { useState, useEffect } from 'react';
import Menu from '../assets/images/menu.svg';
import MenuDark from '../assets/images/menu-dark.svg';
import x from '../assets/images/x.svg';
import xDark from '../assets/images/x-dark.svg';
import sun from '../assets/images/sun.svg';
import sunDark from '../assets/images/sun-darkmode.svg'
import moon from '../assets/images/moon.svg';
import moonDark from '../assets/images/moon-darkmode.svg'

const Navbar = ({ darkMode, handleAppMode }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [closer, setCloser] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
        setCloser(!closer);
    };
    
    return (
        <>
            { screenWidth < 768 ? ( 
                <div className="nav-menu-mobile">
                    <ul className={`mobile-menu gap-3 ${showMenu ? 'active' : ''} ${ darkMode ? 'dark-mode' : ''}`}>
                        <li className="nav-item">
                            <a className="nav-font rounded" href="#about" style={ darkMode ? {color:'#ffe2fe'} : {}}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-font rounded" href="#projects" style={ darkMode ? {color:'#ffe2fe'} : {}}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-font rounded" href="#contacts" style={ darkMode ? {color:'#ffe2fe'} : {}}>Contacts</a>
                        </li>
                        <li className="nav-item">
                            <div className="d-flex gap-2 align-items-center">
                                { darkMode ? <img src={sunDark} className="ml-5 mode-icon" alt="mode-icon"/>
                                : <img src={sun} className="ml-5 mode-icon" alt="mode-icon"/>
                                }                    
                                <div className="switch-container">
                                    <input className="toggle-checkbox" type="checkbox" id="toggle-switch" checked={darkMode} onChange={handleAppMode}/>
                                    <label htmlFor="toggle-switch" className={`toggler ${darkMode ? 'dark-mode' : ''}`}>
                                        <div className={`toggle-circle ${darkMode ? 'dark-mode' : ''}`}></div>
                                    </label>
                                </div>
                                { darkMode ? <img src={moonDark} className="mode-icon" alt="mode-icon"/>
                                : <img src={moon} className="mode-icon" alt="mode-icon"/>
                                }
                            </div>
                        </li>
                    </ul>
                    { closer && darkMode ? (
                        <img onClick={handleMenuToggle} src={xDark} className="menu-icon rounded mt-3 pl-2 glassy"/>
                    ) : closer && !darkMode ? (
                        <img onClick={handleMenuToggle} src={x} className="menu-icon rounded mt-3 pl-2 glassy"/>
                    ) : !closer && !darkMode ? (
                        <img onClick={handleMenuToggle} src={Menu} className="menu-icon rounded mt-3 pl-2 glassy"/>
                    ) : (
                        <img onClick={handleMenuToggle} src={MenuDark} className="menu-icon rounded mt-3 pl-2 glassy"/>
                    )}
                </div>
            ) : (
                <nav className={`nav-menu py-2 px-4 ${darkMode ? 'dark-mode' : ''}`}>
                    <div className="d-flex justify-content-center align-items-center gap-5 container-fluid">
                        <a className={`nav-font rounded px-1 ${darkMode ? 'dark-mode' : ''}`} href="#about">About</a>
                        {/* <a className={`nav-font rounded px-1 ${darkMode ? 'dark-mode' : ''}`} href="#credentials">Credentials</a> */}
                        <a className={`nav-font rounded px-1 ${darkMode ? 'dark-mode' : ''}`} href="#projects">Projects</a>
                        <a className={`nav-font rounded px-1 ${darkMode ? 'dark-mode' : ''}`} href="#contacts">Contacts</a>
                        <div className="d-flex gap-2 align-items-center">
                            { darkMode ? <img src={sunDark} className="ml-5 mode-icon" alt="mode-icon"/>
                            : <img src={sun} className="ml-5 mode-icon" alt="mode-icon"/>
                            }                    
                            <div className="switch-container">
                                <input className="toggle-checkbox" type="checkbox" id="toggle-switch" checked={darkMode} onChange={handleAppMode}/>
                                <label htmlFor="toggle-switch" className={`toggler ${darkMode ? 'dark-mode' : ''}`}>
                                    <div className={`toggle-circle ${darkMode ? 'dark-mode' : ''}`}></div>
                                </label>
                            </div>
                            { darkMode ? <img src={moonDark} className="mode-icon" alt="mode-icon"/>
                            : <img src={moon} className="mode-icon" alt="mode-icon"/>
                            }
                        </div>
                    </div>        
                </nav>    
            )}           
        </>
    );
};

export default Navbar;