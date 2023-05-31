import React from 'react';
import TagDisplay from './TagDisplay';
import layersLogo from '../images/layers.svg';

function Project(props) {

    const imageClickHandler = (e) => {
        //making gallery visibile
        document.getElementById("project-images-" + props.name).style = "display:flex;"
        //preventing scroll external to gallery
        document.getElementsByClassName("vsc-initialized")[0].style = "overflow-y: hidden; background-color: rgb(0, 0, 0, 0.1);"
        document.getElementsByClassName("navbar")[0].style = "background-color: rgb(0, 0, 0, 0);"
    }

    const closeProjectImagesHandler = () => {
        //making gallery invisible
        document.getElementById("project-images-" + props.name).style = "display:none;"
        //re-allowing scroll external to gallery
        document.getElementsByClassName("vsc-initialized")[0].style = "overflow-y: scroll; background-color: white;"
        document.getElementsByClassName("navbar")[0].style = "background-color: #ffffffb4;"
    }

    return (
        <div>
            <div class="project">
                <div class="project-container" id={"project-container" + props.name}>
                    <div class="image">
                        <img class="project-image" src="https://placekitten.com/250/250" alt="" />
                        <img class="layers-logo" onClick={() => imageClickHandler(props.name)} src={layersLogo}></img>
                    </div>

                    <div class="header">{props.name}</div>
                    <div class="description">
                        <div class="project-subheading" style={{ marginBottom: 2 + 'px' }}>
                            Description
                        </div>
                        {props.description}
                    </div>
                    <div class="links">
                        <div class="link">
                            <div class="project-subheading">
                                Code
                            </div>
                            <a href={props.githubLink} target='_'>Link</a>
                        </div>

                        {props.demo ?
                            <div class="link">
                                <div class="project-subheading">
                                    Demo
                                </div>
                                <a href={props.demoLink} target='_'>Link</a>
                            </div> : null
                        }

                        {props.deployed ?
                            <div class="link">
                                <div class="project-subheading">
                                    Site Link
                                </div>
                                <a href={props.siteLink} target='_'>Link</a>
                            </div>
                            : <></>
                        }
                    </div>

                    <div class="tags">
                        {/* <span class="project-subheading">Tags:</span> */}
                        {props.tags.map((tag) => <TagDisplay key={props.tags.indexOf(tag)} tagName={tag} />)}
                    </div>

                    <div id={"project-images-" + props.name} class="project-images">
                        <button class="closeGalleryButton" onClick={closeProjectImagesHandler}>X</button>

                        {
                            props.images.map((e) => <img class="project-image-secondary" src={e} />)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;