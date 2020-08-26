import AxiosHTTP from './AxiosHelper';

const getEvents = () => {
    return AxiosHTTP.get('/events')
}

const getEventStalls = (eventID) => {
    return AxiosHTTP.get(`/events/${eventID}/get-stalls`)
}

const markStallAsBooked = (eventID) => {
    return AxiosHTTP.put(`/stalls/${eventID}/book-stall`)
}

export default {getEvents, getEventStalls, markStallAsBooked};