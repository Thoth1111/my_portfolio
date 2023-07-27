import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-menu py-2 px-4">
            <div className="d-flex justify-content-center align-items-center gap-5 container-fluid">
                <a className="nav-font rounded p-2" href="#about">About</a>
                {/* <a className="nav-font mb-0 pb-2" href="#credentials">Credentials</a> */}
                <a className="nav-font rounded p-2" href="#projects">Projects</a>
                <a className="nav-font rounded p-2" href="#contacts">Contacts</a>
            </div>        
        </nav>
    );
};

export default Navbar;