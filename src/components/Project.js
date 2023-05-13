import React from 'react';

function Project(props) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.githubLink}</div>
            <div>{props.siteLink}</div>
            <div>{props.tags.join(' ')}</div>
            <div>{props.images.join(' ')}</div>
        </div>
    );
}

export default Project;