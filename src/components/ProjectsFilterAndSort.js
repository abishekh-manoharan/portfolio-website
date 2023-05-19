import React from 'react';
import ProjectsFilter from './ProjectsFilter';

function ProjectsFilterAndSort({ tags, handleFilter, handleCancelFilter }) {
    return (
        <div class="filterAndSort">
            <div class="filter-header">Filter by tags:</div>
            <ProjectsFilter tags={tags} handleFilter={handleFilter} handleCancelFilter={handleCancelFilter}/>
            {/* TODO when doing sort functionality */}
            {/* <div class="sort">
                SORT BYs
            </div> */}
        </div>        
    );
}

export default ProjectsFilterAndSort;