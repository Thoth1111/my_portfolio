import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-menu pt-4 px-4 pb-0" style={{borderRadius: '0px'}}>
            <div className="d-flex justify-content-center gap-5 container-fluid">
                <a className="nav-font mb-0 pb-3" href="#">About</a>
                <a className="nav-font mb-0 pb-3" href="#">Credentials</a>
                <a className="nav-font mb-0 pb-3" href="#">Projects</a>
                <a className="nav-font mb-0 pb-3" href="#">Contacts</a>
            </div>
        
        </nav>
    );
};

export default Navbar;