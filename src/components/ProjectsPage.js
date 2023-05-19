import React from 'react';
import { useState, useEffect } from 'react'
import projectsService from '../services/projectsService'
import Projects from './Projects';
import ProjectsFilter from './ProjectsFilter';
import ProjectsFilterAndSort from './ProjectsFilterAndSort';
import Project from './Project';

function ProjectsPage(props) {
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
            
            // updating style to indicate that the tag is active
            e.target.style="opacity:50%"

            updatedActiveTags = activeTags.concat(filterValue)
            console.log('updatedActiveTags: ', updatedActiveTags);
        }

        else {
            console.log('Deactivating tag:' , filterValue);

            // updating style to indicate that the tag is no longer active
            e.target.style="opacity:100%"
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
            <p>active tags: {activeTags}</p>
            <ProjectsFilterAndSort tags={tags} handleFilter={handleFilter} handleCancelFilter={handleCancelFilter}/>
            <Projects projectsToShow={projectsToShow}/>
        </div>
    );
}

export default ProjectsPage;