import React, {Component} from 'react';
import APIService from "../helpers/APIService";
import '../styles/ViewEvents.css';
import Header from "./Header";
import Footer from "./Footer";

class EventDetails extends Component {

    state = {
        stalls: []
    }

    componentDidMount() {
        console.log(`passed eventid:\t ${this.props.location.eventid}`)
        this.setState({eventid: this.props.location.eventid})

        APIService.getEventStalls(this.props.location.eventid)
            .then(response => {
                this.setState({stalls: response.data.data});
                console.log(`Stalls data for id ${this.props.location.eventid} is \n ${JSON.stringify(this.state.stalls)}`);
            })
            .catch(err => console.log(err));
    }

    bookStall(){
        this.props.history.redirect('/register')
        // APIService.markStallAsBooked(this.props.location.eventid)
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <Header/>
                <div className='stall-holder'>
                    {
                        this.state.stalls.map((stall, index) =>
                            <div className='stall' key={index}>
                                <div
                                    className='reserved'>
                                    <img src={stall.image} alt="Stall Logo"/>
                                    {!stall.reserved ? "Free" : "Already Booked"}
                                </div>
                                <h2>{stall.name}</h2>
                                <h4>{`Book this stall for: ${stall.price} USD`}</h4>
                                {
                                    stall.reserved ? <div></div> : <button
                                        onClick={
                                            ()=> this.bookStall()
                                        }
                                    >
                                        Reserve This Stall
                                    </button>
                                }
                            </div>
                        )
                    }
                </div>
                <Footer/>
            </>
        );
    }
}

export default EventDetails;


// import React, {useEffect, useState} from 'react';
// const EventDetails = () => {
//
//     const [events, setEvents] = useState([]);
//     const [stalls, setStalls] = useState([]);
//
//     useEffect(() => {
//         fetchEvents();
//     }, []);
//
//     const fetchEvents = () => {
//         APIService.getEvents()
//             .then(response => {
//                 setEvents(response.data.data);
//                 console.log(response.data.data);
//             })
//             .catch(err => console.log(err))
//         console.log(events)
//     }
//
//     useEffect(()=> {
//         fetchStalls();
//     })
//
//     const fetchStalls = () => {
//         const eventid = events.map((event => event.eventid));
//         console.log(`event id for stalls:\t ${eventid}`);
//         APIService.getEventStalls(1)
//             .then(response => {
//                 setStalls(response.data.data);
//                 console.log(`Stalls data ${JSON.stringify(stalls)}`);
//             })
//             .catch(err => console.log(err));
//     }
//
//     return (
//         <div>
//             {/*{console.log(props.match.params.eventid)}*/}
//             Details
//         </div>
//     );
// };
//
// export default EventDetails;
