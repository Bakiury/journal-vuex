import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-85985-default-rtdb.firebaseio.com'
})

journalApi.interceptors.request.use((config) => {
    const idToken = localStorage.getItem('idToken')

    config.params = {
        auth: idToken
    }

    // config.headers = {
    //     authorization: `bearer ${ idToken }`
    // }

    return config
})

export default journalApi