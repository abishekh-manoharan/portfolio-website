import React from 'react';
import TagDisplay from './TagDisplay';

function Project(props) {
    return (
        <div>
            <div class="project">
                <div class="project-container">
                    <div class="image"><img class="project-image" src="https://placekitten.com/250/250" alt="" /></div>
                    <div class="header">{props.name}</div>
                    <div class="description">
                        <div class="project-subheading" style={{marginBottom: 2+'px'}}>
                            Description
                        </div>
                        {props.description}
                    </div>

                    <div class="url">
                        <div class="project-subheading">
                            Site Link
                        </div>
                        {props.siteLink}
                    </div>
                    <div class="github">
                        <div class="project-subheading">
                            Github Link
                        </div>
                        {props.githubLink}
                    </div>
                    <div class="tags">
                        <span class="project-subheading" style={{marginLeft: 20 + 'px'}}>Tags:</span> {props.tags.map((tag) => <TagDisplay key={props.tags.indexOf(tag)} tagName={tag} />)}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;