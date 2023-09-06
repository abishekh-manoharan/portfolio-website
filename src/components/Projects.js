import React from 'react';
import Project from './Project';

function Projects({projectsToShow, darkMode}) {
    console.log(projectsToShow);
    return (
        <div class="projects-container">
            {projectsToShow.map((e) => <Project key={e.id} darkMode={darkMode} name={e.name} deployed={e.deployed} description={e.description} demo={e.demo} githubLink={e.githubLink} siteLink={e.siteLink}  demoLink={e.demoLink} images={e.images} tags={e.tags} />)}
        </div>
    );
}

export default Projects;