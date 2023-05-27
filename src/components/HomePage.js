import React from 'react';
import torontoSkyline from '../images/torontoSkyline.jpeg'
import profilePic from '../images/profile.png'
import projectsLogo from '../images/projects-logo.svg'
import resumeLogo from '../images/resume-logo.svg'
import contactLogo from '../images/contact-logo.svg'

function HomePage({ setContent }) {


    const closeContactHandler = (e) => {
        const contactContainer = document.getElementById('contact-container');
        contactContainer.style = "display:none;"
    }

    const openContactHandler = () => {
        const contactContainer = document.getElementById('contact-container');
        contactContainer.style = "display:block;"
    }

    const style = {
        color: '#593131',
        textAlign: 'center',
        marginBottom: '5px'
    }

    return (
        <div class="homePage">
            <div id="contact-container">
                <button onClick={closeContactHandler}>
                    close
                </button>
            </div>

            <div class="profile-layout">


                <div class="profile-container">
                    <div class="profile-info">
                        <div class="profile-info-component">
                            <div class="project-subheading">
                                Name
                            </div>
                            <div class="info">
                                Abishekh Manoharan
                            </div>
                        </div>
                        <div class="profile-info-component">
                            <div class="project-subheading">
                                City, Province
                            </div>
                            <div class="info">
                                Toronto, Ontario
                            </div>
                        </div>
                        <div class="profile-info-component">
                            <div class="project-subheading">
                                GitHub
                            </div>
                            <div class="info">
                                <a href="https://github.com/abishekh-manoharan" target='_'>abishekh-manoharan</a>
                            </div>
                        </div>
                        <div class="profile-info-component">
                            <div class="project-subheading" >
                                E-Mail
                            </div>
                            <div class="info">
                                abishekh.manoharan@outlook.com
                            </div>
                        </div>
                        <div class="profile-info-component">
                            <div class="project-subheading">
                                About Me
                            </div>
                            <div class="info">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta"
                            </div>
                        </div>
                    </div>

                    <img src={profilePic} class="profilePic" alt="portfolio profile pic" />
                    <div class="profile-background"></div>
                </div>


                {/* <div class="home-site-nav">
                    <a class="home-site-nav-component">
                        <div class="project-subheading" style={style}><i>Projects</i></div>
                        <img src={projectsLogo} class="home-site-nav-img" onClick={() => { setContent('projects') }}></img>
                    </a>
                    <a class="home-site-nav-component">
                        <div class="project-subheading" style={style}><i>Download Resume</i></div>
                        <img src={resumeLogo} class="home-site-nav-img"></img>
                    </a>
                    <a class="home-site-nav-component" onClick={openContactHandler}>
                        <div class="project-subheading" style={style}><i>Contact Me</i></div>
                        <img src={contactLogo} class="home-site-nav-img"></img>
                    </a>
                </div> */}
            </div>

        </div>
    );
}

export default HomePage;