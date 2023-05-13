import axios from 'axios'
const URL = 'http://localhost:3001/projects'

const getAll = () => axios.get(URL).then(res=>res.data)

export default {getAll}