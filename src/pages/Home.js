import React from 'react'
import '../styles/Home.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewEvents from "../components/ViewEvents";

const Home = () => {

    return (
        <div>
            <Header/>
            <ViewEvents/>
            <Footer/>
        </div>
    )
}

export default Home;