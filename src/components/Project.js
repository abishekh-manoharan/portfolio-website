import React, { useEffect } from 'react';
import { useState } from 'react';
import TagDisplay from './TagDisplay';
import layersLogo from '../images/layers.svg';

function Project(props) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (props.darkMode) {
            document.querySelectorAll('.header').forEach(element => {
                element.style = "color: white;"
            })
            document.querySelectorAll('.closeGalleryButton').forEach(element => {
                element.style = "color: white;"
            })
            document.querySelectorAll('.project').forEach(element => {
                element.style = "background-color: rgb(68, 68, 68, 0.6);"
            })
            
        }
        else {
            document.querySelectorAll('.header').forEach(element => {
                element.style = "color: black;"
            });
            document.querySelectorAll('.closeGalleryButton').forEach(element => {
                element.style = "color: black;"
            })
            document.querySelectorAll('.project').forEach(element => {
                element.style = "background-color: rgba(235, 235, 235, 0.598);"
            })
        }
    }, [props.darkMode])

    const imageClickHandler = (e) => {
        setShow(true)
        //making gallery visibile
        props.darkMode ? document.getElementById("project-images-" + props.name).style = "display:flex; background-color: black;" : document.getElementById("project-images-" + props.name).style = "display:flex; background-color: whitesmoke;"
        //preventing scroll external to gallery
        document.getElementsByClassName("vsc-initialized")[0].style = "overflow-y: hidden; background-color: rgb(0, 0, 0, 0.1);"
        // hiding navbar
            // document.getElementsByClassName("navbar")[0].style = "display:none;"
        document.getElementsByClassName("navbar")[0].classList.add('displayNone')
        
    }

    const closeProjectImagesHandler = () => {
        //making gallery invisible
        document.getElementById("project-images-" + props.name).style = "display:none;"
        //re-allowing scroll external to gallery
        document.getElementsByClassName("vsc-initialized")[0].style = "overflow-y: scroll; background-color: white;"
        if(window.innerWidth >= 900){
            
            document.getElementsByClassName("navbar")[0].classList.add('displayFlex')
        }
        else { 
            if(document.getElementsByClassName("navbar")[0].classList.contains('displayFlex')){
                document.getElementsByClassName("navbar")[0].classList.remove('displayFlex')
            }
            document.getElementsByClassName("navbar")[0].classList.add('displayNone') 
        }
    }

    return (
        <div>
            <div class="project">
                <div class="project-container" id={"project-container" + props.name}>
                    <div class="image">
                        <img class="project-image" src={props.images[0]} alt="" />
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
                            <a class="link-txt" href={props.githubLink} target='_'>Link</a>
                        </div>

                        {props.demo ?
                            <div class="link">
                                <div class="project-subheading">
                                    Demo
                                </div>
                                <a class="link-txt" href={props.demoLink} target='_'>Link</a>
                            </div> : null
                        }

                        {props.deployed ?
                            <div class="link">
                                <div class="project-subheading">
                                    Site Link
                                </div>
                                <a class="link-txt" href={props.siteLink} target='_'>Link</a>
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
                            show ?
                                props.images.map((e) => <>
                                    <img class="project-image-secondary" src={e} />
                                    <br />
                                </>)
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;