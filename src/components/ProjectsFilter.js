import React from 'react';

function ProjectsFilter({ tags, handleFilter, handleCancelFilter }) {
    return (
        <div class="filter-tags-buttons">
            {tags.map((e) => {
                return <button class="tagsButton" onClick={handleFilter} key={e} value={e}>{e}</button>
            })}
            <button id="cancelFilterButton" onClick={handleCancelFilter}>Clear Filters</button>
        </div>
    );
}

export default ProjectsFilter;