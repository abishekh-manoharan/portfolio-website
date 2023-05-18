import React from 'react';
import TagDisplay from './TagDisplay';

function Project(props) {
    return (
        <div>
            <div class="project">
                <div class="project-container">
                    <div class="image"><img class="project-image" src="https://placekitten.com/250/250" alt="" /></div>
                    <div class="header">{props.name}</div>
                    <div class="description">{props.description}</div>
                    <div class="url">{props.siteLink}</div>
                    <div class="github">{props.githubLink}</div>
                    <div class="tags">
                        {props.tags.map((tag)=><TagDisplay tagName={tag}/>)}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;