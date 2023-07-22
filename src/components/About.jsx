import React from 'react';
import banner from '../assets/images/banner.jpeg';
import profile from '../assets/images/profile.jpg'

const About = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items center glassy mx-auto mt-5 about p-5">
            <div className="px-auto d-flex justify-content-center pic-container">                
                <img src={banner}  className="banner-pic"/>
                <img src={profile} className="profile-pic" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center description mx-auto mt-5">
                <h1 className="mx-auto text-align-center">ABOUT ME</h1>
                <article>
                I’m a former avionics engineer turned software developer and an avid tech enthusiast. I've recently obtained my Full-stack developer certification from Microverse (a remote software development program that uses pair programming and project building to teach development), in addition to 5 other certifications for Ruby on Rails, Ruby, React, JavaScript, and HTML/CSS. Throughout my learning I worked remotely with people from different parts of the world, completed several projects, participated in pair programming sessions, and developed strong communication and collaborative skills as a result. 

I've also had the pleasure of working as a technical/customer support professional, and attained transferrable skills in management, dispute resolution, communication and technical support. In this role I Resolved more than 100 disputes amicably resulting in customer retention and satisfaction, managed and trained a team of 8 professionals and facilitated the improvement of the support department, came up with technical and non-technical solutions to improve customer engagement, conversion and retention, and assisted the technical department to devise solutions to system related issues that affected customer experience.

My dream is to contribute and be part of projects that develop communities and foster sustainable living. I also have a love deep love for the gaming industry and aspire to work on and contribute to game development projects as well. 
                </article>
            </div>
        </div>
    );
};

export default About;