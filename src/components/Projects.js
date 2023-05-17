import React from 'react';
import { useState, useEffect } from 'react'
import projectsService from '../services/projectsService'
import Project from './Project';

function Projects(props) {
    //const [filterTags, setFilterTags] = useState([{tag:"a", set: false},{tag:"b", set: false},{tag:"c", set: false}])
    const [tags, setTags] = useState(['a', 'b', 'c'])
    const [activeTags, setActiveTags] = useState([])
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
        console.log('filter value: '+filterValue)
        let updatedActiveTags = []

        if(!activeTags.includes(filterValue)){
            console.log('adding tag: ', filterValue);

            updatedActiveTags = activeTags.concat(filterValue)
            console.log('updatedActiveTags: ', updatedActiveTags);
        }

        else {
            console.log('Deactivating tag:' , filterValue);
            updatedActiveTags = [...activeTags]
            updatedActiveTags.splice(activeTags.indexOf(filterValue),1)
            console.log('updated active tags: ',updatedActiveTags)
        }
        // filter projectsToShow based on the condition that a project includes every active tag
        const updatedProjectsToShow = allProjects.filter((project) => {return updatedActiveTags.every((tag)=>project.tags.includes(tag))})
        console.log('updatedProjectsToShow: after filter',updatedProjectsToShow);
        
        const updatedActiveTagsConst = [...updatedActiveTags]

        setProjectsToShow(updatedProjectsToShow)
        setActiveTags(updatedActiveTagsConst)
    }


    const handleCancelFilter = () => {
        setProjectsToShow(allProjects)
        setActiveTags([])
    }

    return (
        <div>
            {projectsToShow.map((e) => <Project name={e.name} description={e.description} githubLink={e.githubLink} siteLink={e.siteLink} images={e.images} tags={e.tags}/>)}

            {tags.map((e)=> {
                return <button onClick={handleFilter} key={e} value={e}>{e}</button>
            })}
            // {/* <button onClick={handleFilter}>filter</button> */}
            <button onClick={handleCancelFilter}>Cancel filter</button>
            <br/>
            <p>active tags: {activeTags}</p>
        </div>
    );
}

export default Projects;