import React from 'react';
import ProjectsFilter from './ProjectsFilter';
import dropdownLogoDark from '../images/dropdownLogo.png'
import dropdownLogoLight from '../images/dropdownLogoLight.svg'

function ProjectsFilterAndSort({ tags, handleFilter, handleCancelFilter, darkMode }) {
    return (
        <div class="filterAndSort">
            {darkMode ?
                <img src={dropdownLogoLight} class="dropdownLogo" /> :
                <img src={dropdownLogoDark} class="dropdownLogo" />
            }
            <div class="filter-header">
                Filter
                <ProjectsFilter tags={tags} handleFilter={handleFilter} handleCancelFilter={handleCancelFilter} />
            </div>
            {/* TODO when doing sort functionality */}
            {/* <div class="sort">
                SORT BYs
            </div> */}
        </div>
    );
}

export default ProjectsFilterAndSort;