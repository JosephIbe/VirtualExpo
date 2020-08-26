import React from 'react';
import ConferenceImage from '../assets/images/tech_conference_image.jpg';
import {Link} from 'react-router-dom';

const LandingBody = () => {
    return (
        <>
            <div className="landing-body">
                <div className="landing-text">
                    <span className='app-name'>Virtual Expo, </span>
                    is an online event where tech stakeholders,
                    CEOs, small start ups, developers, designers and everyone in the tech eco space
                    can secure their berths for the main event on 1st September, 2035 post corona eradication.
                    <br/><br/>
                    A map will be shown where candidates,
                    after registering can view the available programs/events and secure stalls. inside to
                    proceed with their various speeches or meet ups.
                    <br/><br/>
                    We believe in dev-sync, which is to bring IT people from different spheres
                    as one to speak on common issues and chart roadmaps to breakthrough.
                    <br/><br/>
                    See you inside.

                    <br/><br/>

                    <div className="btns-layout">
                        <Link to='/view-events' className='link'>
                            <button className='landing-btn'>Enter</button>
                        </Link>
                    </div>

                </div>
                <div className="landing-img">
                    <img src={ConferenceImage} alt="Conference Photo"/>
                </div>
            </div>
        </>
    );
};

export default LandingBody;
