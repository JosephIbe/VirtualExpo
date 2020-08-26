import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingBody from "../components/LandingBody";
import '../styles/Landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <Header/>
            <LandingBody/>
            <Footer/>
        </div>
    );
};

export default Landing;
