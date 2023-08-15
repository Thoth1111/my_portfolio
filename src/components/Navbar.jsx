import React, { useState } from 'react';
import Menu from '../assets/images/menu.svg';
import x from '../assets/images/x.svg';
import sun from '../assets/images/sun.svg';
import sunOff from '../assets/images/sun-off.svg';
import moonOff from '../assets/images/moon-off.svg';
import moon from '../assets/images/moon.svg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [closer, setCloser] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
        setCloser(!closer);
    };
    
    return (
        <>
            <div className="nav-menu-mobile">
                <ul className={`mobile-menu gap-5 ${showMenu ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a className="nav-font rounded glassy" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-font rounded glassy" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-font rounded glassy" href="#contacts">Contacts</a>
                    </li>
                </ul>
                { closer ? <img onClick={handleMenuToggle} src={x} className="menu-icon rounded mt-3 pl-2 glassy"/>
                : <img onClick={handleMenuToggle} src={Menu} className="menu-icon rounded mt-3 pl-2 glassy"/>
                }
            </div>
            <nav className="nav-menu py-2 px-4">
                <div className="d-flex justify-content-center align-items-center gap-5 container-fluid">
                    <a className="nav-font rounded px-1" href="#about">About</a>
                    {/* <a className="nav-font rounded px-1" href="#credentials">Credentials</a> */}
                    <a className="nav-font rounded px-1" href="#projects">Projects</a>
                    <a className="nav-font rounded px-1" href="#contacts">Contacts</a>
                    <div className="d-flex gap-2 align-items-center">
                        { darkMode ? <img src={sunOff} className="ml-5 mode-icon" alt="lightMode-icon"/>
                        : <img src={sun} className="ml-5 mode-icon" alt="lightMode-icon"/>
                        }
                        <div className="switch-container">
                            <input className="toggle-checkbox" type="checkbox" id="toggle-switch" onChange={handleAppMode}/>
                            <label htmlFor="toggle-switch" className="toggler">
                                <div className="toggle-circle"></div>
                            </label>
                        </div>
                        { darkMode ? <img src={moonOff} className="mode-icon" alt="darkMode-icon"/>
                        : <img src={moon} className="mode-icon" alt="darkMode-icon"/>
                        }
                    </div>
                </div>        
            </nav>
        </>
    );
};

export default Navbar;