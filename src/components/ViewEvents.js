import React, {useEffect, useState} from 'react';
import '../styles/ViewEvents.css';
import APIService from "../helpers/APIService";
import moment from "moment";
import {useHistory} from "react-router";
import Loading from "./Loading";

const ViewEvents = () => {

    const history = useHistory();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        APIService.getEvents()
            .then(response => {
                setEvents(response.data.data);
                console.log(response.data.data);
            })
            .catch(err => console.log(err))
        console.log(events)
    }

    return (
        <div className='events-holder'>
            {
                events.length <= 0 ? <Loading />
                : events && events.map((program, index) =>
                    <div className='programs-item' key={index} >
                        <div className="program-title">{program.name}</div>
                        <h4>Venue: {program.location}</h4>
                        <h5>{`Date:\t` + moment(program.date).format('MM/DD/YYYY')}</h5>
                        <button
                            className='book-btn'
                            onClick={
                                ()=> history.push({pathname: '/choose-stall', eventid: program.eventid})
                            }>
                            Book Your Place
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default ViewEvents;
