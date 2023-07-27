import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Html from '../assets/images/html.png';
import Css from '../assets/images/css.png';
import Javascript from '../assets/images/javascript.png';
import Bootstrap from '../assets/images/bootstrap.png';
import ReactPic from '../assets/images/react.png';
import Tailwind from '../assets/images/tailwind.png';
import Figma from '../assets/images/figma.png';
import Git from '../assets/images/git.png';
import Redux from '../assets/images/redux.png';
import Jest from '../assets/images/jest.png';
import Postgres from '../assets/images/postgres.png';
import Ruby from '../assets/images/ruby.png';
import Rails from '../assets/images/rails.png';
import Jquery from '../assets/images/jquery.png';
import Github from '../assets/images/githubskill.png';
import Agile from '../assets/images/agile.png';

const carouselItems = [
    {name: 'HTML5', logo: Html, description: 'Web-dev'},
    {name: 'CSS3', logo: Css, description: 'Web-dev'},
    {name: 'JavaScript', logo: Javascript, description: 'Languages'},
    {name: 'Ruby', logo: Ruby, description: 'Languages'},
    {name: 'JQuery', logo: Jquery, description: 'Libraries'},
    {name: 'Redux', logo: Redux, description: 'Libraries'},
    {name: 'Bootstrap', logo: Bootstrap, description: 'Frameworks'},
    {name: 'React', logo: ReactPic, description: 'Frameworks'},
    {name: 'Rails', logo: Rails, description: 'Frameworks'}, 
    {name: 'Tailwind CSS', logo: Tailwind, description: 'Frameworks'},
    {name: 'Jest', logo: Jest, description: 'Frameworks'},
    {name: 'Figma', logo: Figma, description: 'Tools'},
    {name: 'Github', logo: Github, description: 'Tools'},        
    {name: 'Git', logo: Git, description: 'Version Control'},       
    {name: 'PostgreSQL', logo: Postgres, description: 'Databases'},
    {name: 'Agile', logo: Agile, description: 'Methodologies'}
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div className="mb-3 p-5">
            <Slider {...settings}>
                {carouselItems.map((skill, index) => (
                    <div key={index} className="d-flex flex-column align-items-center p-2 mx-3 justify-content-between skill-card">
                        <p className="skills-text mb-4" style={{color: '#d3c1d2'}}>{skill.description}</p>
                        <img src={skill.logo} alt={skill.name} style={{width:'75px', height:'70px'}} />
                        <p className="skills-text mt-1">{skill.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );    
};

export default Carousel;