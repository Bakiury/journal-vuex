import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCZ20dnqz7hScJ2DbmlMS4lhgar9edVFz4'
    }
})

export default authApi