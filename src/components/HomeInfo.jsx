import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Kailash Kumar</span> 👋
            <br />
            A Software Developer from Mathura, India
            </h1>
    ),
    2: (
        <InfoBox 
         text="Final Year B.Tech Student, did an internship as a Software Developer and picked up many skills along the way."
         link='/about'
         btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
         text="Developed multiple Projects in Web Development Field. Wanna see?"
         link='/projects'
         btnText="Visit My Portfolio"
        />
    ),
    4: (
        <InfoBox 
         text="Need a Project done or Looking for a dev? I'm just a keystrokes away"
         link='/contact'
         btnText="Let's Talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo