import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-menu glassy">
            <div className="d-flex justify-content-center gap-5 container-fluid">
                <a className="nav-font" href="#">About</a>
                <a className="nav-font" href="#">Credentials</a>
                <a className="nav-font" href="#">Projects</a>
                <a className="nav-font" href="#">Contacts</a>
            </div>
        
        </nav>
    );
};

export default Navbar;