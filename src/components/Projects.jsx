import React from 'react';
import withIntersectionObserver from './withObserver';
import Slideshow from './Slideshow';
import vespa from '../assets/images/vespas.png';
import vespa1 from '../assets/images/vespas1.png';
import spacehub from '../assets/images/spacehub.png';
import spacehub1 from '../assets/images/spacehub1.png';
import fundsense from '../assets/images/fundsense.png';
import fundsense1 from '../assets/images/fundsense1.png';
import awair from '../assets/images/awair.png';
import awair1 from '../assets/images/awair1.png';

const projectList = [
    {
        name: 'Vespa\'s Reservation', 
        description: 'This project is designed for the reservation of fancy vespas. A user can add, reserve , and delete vespas. The app is also user authenticated using Devise JWT.', 
        image: [ vespa, vespa1 ], 
        link: 'https://vespa-reservation.onrender.com',
        source: 'https://github.com/Thoth1111/Fullstack-Capstone-Project',
        stack: ['Ruby on Rails', 'React', 'Redux', 'PostgreSQL', 'Tailwind CSS', 'JWT']
    },
    {
        name: 'FundSense Budget App', 
        description: 'A mobile web application where you can manage your budget. You have a list of transactions associated with a category, so that you can see how much money you spent and on what.', 
        image: [ fundsense, fundsense1 ], 
        link: 'https://fundsense-budget-app.onrender.com',
        source: 'https://github.com/Thoth1111/Fundsense-budget-App',
        stack: ['Ruby on Rails', 'PostgreSQL']
    },
    {
        name: 'Space-X Rockets & Missions',
        description: 'A collaborative project that makes use of Space-X\'s API to fetch rockets & missions data. It also allows a user to reserve a rocket and join a mission.',
        image: [ spacehub, spacehub1 ],
        link: 'https://thoth-space-travelers-hub.onrender.com/',
        source: 'https://github.com/Thoth1111/Space-Travelers-Hub',
        stack: ['React', 'Redux']
    },
    {
        name: 'Awair Air Quality App',
        description: 'Awair is a mobile app that fetches and displays the air quality index of pre-selected cities around the world. Users can also use the search feature to find and display detailed AQI(Air Quality Index) based on city.',
        image: [ awair, awair1],
        link: 'https://awair-app.onrender.com/',
        source: 'https://github.com/Thoth1111/AWair-mobile-app',
        stack: ['React', 'Redux']
    }
];

const Projects = ( { headingRef }) => {
    return (
        <section className="d-flex flex-column align-items-center justify-content-center pt-5 mb-5 projects">
            <h1 className="heading mb-5 pb-5" id="projects" ref={headingRef}>Projects</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {projectList.map((project, index) => (
                    <div key={index} className="d-flex align-items-center justify-content-center gap-5 p-5 mb-5 project-card">
                        <Slideshow images={project.image} />                        
                        <div className="project-info d-flex flex-column justify-content-center align-items-center" style={{height: '500px'}}>
                            <h2 className="fw-bold mb-1">{project.name}</h2>
                            <div className="d-flex wrap justify-content-center gap-2 align-items-center mb-5">
                                {project.stack.map((item, index) => (
                                    <span key={index} className="stack px-2 fw-bold">{item}</span>
                                ))}
                            </div>
                            <p style={{color: '#626868', width: '50%'}}>{project.description}</p>
                            <div className="d-flex justify-content-between gap-5 align-items-center mt-4">
                                <a href={project.link} className="border rounded skill-btns px-3" target="_blank" rel="noreferrer">Project Demo</a>
                                <a href={project.source} className="border rounded skill-btns px-3" target="_blank" rel="noreferrer">Source Code</a>
                            </div>
                        </div>                        
                    </div>
                ))}
            </div>
        </section>
                                
    );
};

export default withIntersectionObserver(Projects);