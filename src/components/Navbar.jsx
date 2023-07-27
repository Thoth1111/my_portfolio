import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-menu py-2 px-4" style={{borderRadius: '0px'}}>
            <div className="d-flex justify-content-center gap-5 container-fluid">
                <a className="nav-font mb-0 pb-2" href="#about">About</a>
                {/* <a className="nav-font mb-0 pb-2" href="#credentials">Credentials</a> */}
                <a className="nav-font mb-0 pb-2" href="#projects">Projects</a>
                <a className="nav-font mb-0 pb-2" href="#contacts">Contacts</a>
            </div>
        
        </nav>
    );
};

export default Navbar;