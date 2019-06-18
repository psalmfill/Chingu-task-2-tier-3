import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://images-api.nasa.gov`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}