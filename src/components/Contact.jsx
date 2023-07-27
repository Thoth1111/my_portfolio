import React, { useRef } from 'react';
import withIntersectionObserver from './withObserver';
import Socials from './Socials';

const Contact = ({ headingRef }) => {
    return (
        <section className="d-flex flex-column align-items-center justify-content-center pt-5 contact">
            <h1 className="heading my-5 pb-5" id="contacts" ref={headingRef}>Get in touch</h1>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="p-5 CTA">
                    <h2 className="px-auto" style={{fontSize:'48px'}}>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h2>
                </div>
                <div className="form-entries p-0 mb-5">
                    <form action="" method="post" className="d-flex flex-column gap-3 justify-content-center align-items-center">
                        <input type="text" className="fill-area rounded" id="fullname" name="fname" maxlength="70" required placeholder="Full Name" />
                        <input type="email" className="fill-area rounded" id="address" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address" />
                        <textarea rows="8" className="fill-area rounded" id="message" maxLength="500" required placeholder="Your message" />
                        <input className="rounded skill-btns p-3 mt-3 mb-5" id="post" type="submit" value="Email Me" style={{position: 'relative', right: '25%'}}/>
                    </form>   
                </div>
            </div>
            <Socials />
        </section>
    );
};

export default withIntersectionObserver(Contact);