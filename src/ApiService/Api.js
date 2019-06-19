import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://api.nasa.gov/mars-photos`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}