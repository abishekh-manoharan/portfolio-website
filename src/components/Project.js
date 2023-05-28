import React from 'react';
import TagDisplay from './TagDisplay';

function Project(props) {

    const imageClickHandler = (e) => {
        document.getElementById("project-images-"+props.name).style="display:flex;"
    }

    return (
        <div>
            <div class="project">
                <div class="project-container">
                    <div class="image" onClick={()=>imageClickHandler(props.name)}><img class="project-image" src="https://placekitten.com/250/250" alt="" /></div>
                    <div class="header">{props.name}</div>
                    <div class="description">
                        <div class="project-subheading" style={{ marginBottom: 2 + 'px' }}>
                            Description
                        </div>
                        {props.description}
                    </div>
                    <div class="github">
                        <div class="project-subheading">
                            Code, demos (if applicable), etc.
                        </div>
                        {props.githubLink}
                    </div>

                    { props.deployed ?
                        <div class="url">
                            <div class="project-subheading">
                                Site Link
                            </div>
                            {props.siteLink}
                        </div>
                        : <></>
                    }

                    <div class="tags">
                        <span class="project-subheading" style={{ marginLeft: 20 + 'px' }}>Tags:</span> {props.tags.map((tag) => <TagDisplay key={props.tags.indexOf(tag)} tagName={tag} />)}
                    </div>

                    <div id={"project-images-"+props.name} class="project-images">
                        {
                            props.images.map((e)=><img class="project-image-secondary"src={e}/>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;