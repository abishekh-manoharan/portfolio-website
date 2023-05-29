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
        <div>


            <div class="homePage">
                <div id="contact-container">
                    <button onClick={closeContactHandler}>
                        close
                    </button>
                </div>

                <div class="profile-layout">
                    <div class="profile-container">
                        <img src={profilePic} class="profilePic" alt="portfolio profile pic" />
                        <div class="profile-background"></div>
                    </div>

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
                </div>
                <br></br>
            </div>

        </div>
    );
}

export default HomePage;