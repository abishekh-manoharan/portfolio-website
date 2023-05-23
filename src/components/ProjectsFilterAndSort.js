import React from 'react';
import ProjectsFilter from './ProjectsFilter';
import dropdownLogo from '../images/dropdownLogo.png'

function ProjectsFilterAndSort({ tags, handleFilter, handleCancelFilter }) {
    return (
        <div class="filterAndSort">
            <img src={dropdownLogo} class="dropdownLogo"/>
            <div class="filter-header">
                Filter
                <ProjectsFilter tags={tags} handleFilter={handleFilter} handleCancelFilter={handleCancelFilter}/>
            </div>
            {/* TODO when doing sort functionality */}
            {/* <div class="sort">
                SORT BYs
            </div> */}
        </div>        
    );
}

export default ProjectsFilterAndSort;