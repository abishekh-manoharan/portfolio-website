import React from 'react';
import torontoSkyline from '../images/torontoSkyline.jpeg'
import profilePic from '../images/profile.jpg'
import projectsLogo from '../images/projects-logo.svg'

function HomePage(props) {
    return (
        <div class="homePage">
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
                        <div class="project-subheading">
                            Contact Me
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

            <div class="home-site-nav">
                <div class="home-site-nav-component">
                    <img src={projectsLogo}></img>
                </div>
                <div class="home-site-nav-component">
                    <img src={projectsLogo}></img>
                </div>
                <div class="home-site-nav-component">
                    <img src={projectsLogo}></img>
                </div>
                <div class="home-site-nav-component">
                    <img src={projectsLogo}></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;