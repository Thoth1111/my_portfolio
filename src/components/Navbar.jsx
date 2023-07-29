import React, { useState, useEffect } from 'react';
import Menu from '../assets/images/menu.svg';
import x from '../assets/images/x.svg';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [closer, setCloser] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
        setCloser(!closer);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <>
        { isMobile ? ( 
            <div className="nav-menu">
                <ul className={`mobile-menu gap-5 ${showMenu ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a className="nav-font glassy" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-font glassy" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-font glassy" href="#contacts">Contacts</a>
                    </li>
                </ul>
                { closer ? <img onClick={handleMenuToggle} src={x} className="menu-icon rounded mt-3 pl-2 glassy"/>
                : <img onClick={handleMenuToggle} src={Menu} className="menu-icon rounded mt-3 pl-2 glassy"/>
                }
            </div>
        )
        :(
            <nav className="nav-menu py-2 px-4">
                <div className="d-flex justify-content-center align-items-center gap-5 container-fluid">
                    <a className="nav-font rounded p-2" href="#about">About</a>
                    {/* <a className="nav-font mb-0 pb-2" href="#credentials">Credentials</a> */}
                    <a className="nav-font rounded p-2" href="#projects">Projects</a>
                    <a className="nav-font rounded p-2" href="#contacts">Contacts</a>
                </div>        
            </nav>
        )}
        </>
    );
};

export default Navbar;