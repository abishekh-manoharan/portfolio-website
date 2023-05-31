import axios from 'axios'
const projectURL = 'http://localhost:3001/projects'
const tagsURL = 'http://localhost:3001/tags'

const getAllProjects = () => axios.get(projectURL).then(res=>res.data)
const getAllTags = () => axios.get(tagsURL).then(res=>res.data)

export default {getAllProjects, getAllTags}