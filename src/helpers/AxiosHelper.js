import Axios from 'axios';

export default Axios.create({
    baseURL: "http://localhost:4005/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});