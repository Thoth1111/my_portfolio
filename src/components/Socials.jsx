import React from 'react';
import Github from '../assets/images/github.png';
import LinkedIn from '../assets/images/linkedin.svg';
import Threads from '../assets/images/threads.png';
import Twitter from '../assets/images/twitter.svg';
import HackerRank from '../assets/images/hackerrank.png';

const Socials = () => {
    const sites = [
        { name: 'Github', icon: Github, link: 'https://github.com/Thoth1111'},
        { name: 'LinkedIn', icon: LinkedIn, link: 'https://www.linkedin.com/in/alwyn-androvelle-simiyu/'},
        { name: 'Threads', icon: Threads, link: 'https://www.threads.net/@alwyn_androvelle'},
        { name: 'Twitter', icon: Twitter, link: 'https://www.twitter.com/@androvelle'},
        { name: 'HackerRank', icon: HackerRank, link: 'https://www.hackerrank.com'}
    ];

    return (
        <div className="d-flex gap-5 mb-5 pb-5">
            {sites.map((site) => {
                return (
                <div className="d-flex justify-content-center align-items-center icon-container" id={`${site.name}-container`} key={site.name}>
                    <a target="_blank" href={site.link}>
                        <img src={site.icon} className={`${site.name} site-pic`} alt={site.name}/>
                    </a>
                </div>
                )
            })}
        </div>
    );
};

export default Socials;