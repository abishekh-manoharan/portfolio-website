import React from 'react';
import { useState, useEffect } from 'react'
import projectsService from '../services/projectsService'
import Project from './Project';

function Projects(props) {

    const tags = ["a", "b"]
    const [projectsToShow, setProjectsToShow] = useState([])
    const [allProjects, setAllProjects] = useState([])
    
    useEffect(()=>{
        projectsService.getAll()
            .then((res)=>{
                setAllProjects(res)
                setProjectsToShow(res)
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
            {projectsToShow.map((e) => <Project name={e.name} description={e.description} githubLink={e.githubLink} siteLink={e.siteLink} images={e.images} tags={e.tags}/>)}

            {tags.map((e)=> {
                return <button onClick={handleFilter} key={e} value={e}>{e}</button>
            })}
            {/* <button onClick={handleFilter}>filter</button> */}
            <button onClick={handleCencelFilter}>Cancel filter</button>
        </div>
    );
}

export default Projects;