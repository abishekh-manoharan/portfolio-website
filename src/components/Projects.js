import React from 'react';
import Project from './Project';

function Projects({projectsToShow}) {
    return (
        <div class="projects-container">
            {projectsToShow.map((e) => <Project name={e.name} description={e.description} githubLink={e.githubLink} siteLink={e.siteLink} images={e.images} tags={e.tags} />)}
        </div>
    );
}

export default Projects;