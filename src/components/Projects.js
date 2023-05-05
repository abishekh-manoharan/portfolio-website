import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Projects(props) {

    const tags = ["a", "b"]

    const [projectsToShow, setProjectsToShow] = useState([])
    const [allProjects, setAllProjects] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3001/projects')
            .then((res)=>{
                setAllProjects(res.data)
                setProjectsToShow(res.data)
            })
    }, [])

    const handleFilter = (e) => {
        const filterValue = e.target.value;

        const filtered = allProjects.filter((e)=>{
            return e.tags.includes(filterValue)
        })

        setProjectsToShow(filtered)
    }

    const handleCencelFilter = () => {
        setProjectsToShow(allProjects)
    }

    return (
        <div>
            {projectsToShow.map((e)=>{
                return <p key={e.id}>{e.name}</p>
            })}

            {tags.map((e)=> {
                return <button onClick={handleFilter} key={e} value={e}>{e}</button>
            })}
            {/* <button onClick={handleFilter}>filter</button> */}
            <button onClick={handleCencelFilter}>Cancel filter</button>
        </div>
    );
}

export default Projects;