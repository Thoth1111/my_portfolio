import React, { useState } from 'react';
import axios from 'axios';
import withIntersectionObserver from './withObserver';
import Socials from './Socials';

const Contact = ({ headingRef }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = (e) => {
        e.preventDefault();
        if (name && email && message) {
            axios.post('http://localhost:5000/send-email',{
                name: name,
                email: email,
                message: message
            })
            .then(() => {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(() => alert('An error occured while sending your message. Please try again later.'));
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <section className="d-flex flex-column align-items-center justify-content-center pb-4 pt-5 contact">
            <h1 className="heading" id="contacts" ref={headingRef}>Get in touch</h1>
            <div className="contact-cont mb-5">
                <div className="p-5 CTA">
                    <h2 className="px-auto py-auto">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h2>
                </div>
                <div className="form-entries mb-5">
                    <form onSubmit={sendMail} className="d-flex flex-column pt-4 mt-4 gap-3 justify-content-center align-items-end">
                        <input type="text" className="fill-area rounded" onChange={handleNameChange} id="fullname" name="Your name" maxLength="70" required placeholder="Full Name" value={name}/>
                        <input type="email" className="fill-area rounded" onChange={handleEmailChange} id="address" name="Your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address" value={email}/>
                        <textarea rows="8" className="fill-area rounded" onChange={handleMessageChange} id="message" maxLength="500" required placeholder="Your message" value={message}/>
                        <input type="submit" value="Email Me" className="rounded skill-btns p-3 mt-3 mb-5" id="post"/>
                    </form>   
                </div>
            </div>
            <Socials />
        </section>
    );
};

export default withIntersectionObserver(Contact);