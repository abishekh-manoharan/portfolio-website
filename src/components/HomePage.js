import React from 'react';
import torontoSkyline from '../images/torontoSkyline.jpeg'
import profilePic from '../images/profile.jpg'

function HomePage(props) {
    return (
        <div class="homePage">
            <div class="profile-container">
                <div class="profile-info">
                    <div class="intro-text">
                        Hello World! My name is Abi and I am a software developer living in Toronto, Canada.
                    </div>
                </div>

                <img src={profilePic} class="profilePic" alt="portfolio profile pic" />
                <div class="profile-background"></div>
            </div>

        </div>
    );
}

export default HomePage;