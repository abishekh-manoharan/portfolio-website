import React from 'react';

function ProjectsFilter({tags, handleFilter, handleCancelFilter}) {
    return (
        <div>
            {tags.map((e)=> {
                return <button onClick={handleFilter} key={e} value={e}>{e}</button>
            })}
            // {/* <button onClick={handleFilter}>filter</button> */}
            <button onClick={handleCancelFilter}>Cancel filter</button>
        </div>
    );
}

export default ProjectsFilter;