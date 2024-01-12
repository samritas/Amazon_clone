import axios from 'axios'
const instance=axios.create({
    baseURL:'https://backend-samritas.onrender.com/'
})
export default instance;