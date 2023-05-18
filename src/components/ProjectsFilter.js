import React from 'react';

function ProjectsFilter({tags, handleFilter, handleCancelFilter}) {
    return (
        <div class="filter-tags-buttons">
            filter: 
            {tags.map((e)=> {
                return <button class="tagsButton" onClick={handleFilter} key={e} value={e}>{e}</button>
            })}
            // {/* <button onClick={handleFilter}>filter</button> */}
            <button id="cancelFilterButton" onClick={handleCancelFilter}>Cancel filter</button>
        </div>
    );
}

export default ProjectsFilter;