import React, { useEffect } from 'react';
import { useState } from 'react'
import HomePage2 from './HomePage2'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';
import Footer from './Footer';
import Nav from './Nav';
import lightbg from '../images/bg-light.jpeg'
import darkbg from '../images/bg-dark.jpeg'
import lightLogo from '../images/darkmode-light.svg'
import darkLogo from '../images/darkmode-dark.svg'

function Layout(props) {
    const [content, setContent] = useState('projects')
    const [darkMode, setDarkMode] = useState(false)
    const [navOpen, setNavOpen] = useState(false);

    let contentToShow = <HomePage2 />

    useEffect(() => {
        darkMode // adapt darkmode depending on state
            ? setStylesForDark()
            : setStylesForLight()

        navOpen // adapt nav opening/closing depending on state
            ? (document.getElementById("nav-bar").style.width = "100%")
            : (document.getElementById("nav-bar").style.width = "0px");
    }, [darkMode, navOpen])

    // hanlder to update main page content
    const navBarItemClickHandler = (e) => {
        setContent(e)
    }
    //handler to open/close mobile navbar
    const navClick = () => {
        setNavOpen(!navOpen);
    };

    const setStylesForDark = () => {
        document.getElementById('App').style = "color: white;"
        document.querySelectorAll('.button').forEach(element => {
            element.style = "color: white; border-color: white;"
        });
        document.querySelectorAll('.header').forEach(element => {
            element.style = "color: white;"
        });
        document.getElementById('background-overlay').style = "background-color: #0000007d;"
        document.getElementById("nav-bar").style = "background-color: black;"
    }

    const setStylesForLight = () => {
        document.getElementById('App').style = "color: black;"
        document.querySelectorAll('.button').forEach(element => {
            element.style = "color: black; border-color: black;"
        });
        document.querySelectorAll('.header').forEach(element => {
            element.style = "color: black;"
        });
        document.getElementById('background-overlay').style = "background-color: #rgba(255, 255, 255, 0.150);"
        document.getElementById("nav-bar").style = "background-color: white;"
    }


    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    }

    if (content === 'home') { contentToShow = <HomePage2 setStylesForDark={setStylesForDark} setStylesForLight={setStylesForLight} darkMode={darkMode} setContent={setContent} /> }
    else { contentToShow = <ProjectsPage setStylesForDark={setStylesForDark} setStylesForLight={setStylesForLight} darkMode={darkMode} /> }

    return (
        <div class="layout">
            {/* // desktop navbar */}
            <div class="navbar">
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('home')}>Logo</button> */}
                <button class="navbarItem button" onClick={() => navBarItemClickHandler('home')}>Home</button>
                <button class="navbarItem button" onClick={() => navBarItemClickHandler('projects')}>Projects</button>
                <a id="navbarItem-github-btn" href="https://github.com/abishekh-manoharan/portfolio-website" target='_'><button class="navbarItem button" >GitHub</button></a>
                <button class="navbarItem button" id="darkModeLogo" onClick={darkModeHandler}>
                    {darkMode ?
                        <img src={lightLogo} className="darkModeLogo" />
                        : <img src={darkLogo} className="darkModeLogo" />
                    }
                </button>
                {/* <img src={lightLogo} class="navbarItem button" onClick={darkModeHandler}/> */}
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('resume')}>Resume</button> */}
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('contacts')}>Contact</button> */}
            </div>

            {/* // mobile navbar */}
            <button class="nav-btn" onClick={navClick}>
                Nav
            </button>

            <div class="content">
                {contentToShow}
            </div>

            <div class="footer">
                {/* <Footer/> */}
            </div>
            {/* {darkMode ? <div className="background-overlay"><img src={darkbg} className="background-img" /></div> : <div className='background-overlay'> <img src={lightbg} className="background-img" /></div>} */}
            {darkMode ?
                <div className="bg">
                    <div id="background-overlay" />
                    <img src={darkbg} className="background-img" />
                </div>
                :
                <div className="bg">
                    <div id="background-overlay" />
                    <img src={lightbg} className="background-img" />
                </div>
            }

            <Nav setNavOpen={setNavOpen} setContent={setContent} darkMode={darkMode} darkModeHandler={darkModeHandler} />
        </div>
    );
}

export default Layout;