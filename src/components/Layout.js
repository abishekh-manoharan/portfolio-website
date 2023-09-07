import React, { useEffect } from 'react';
import { useState } from 'react'
import HomePage2 from './HomePage2'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';
import Footer from './Footer';
import lightbg from '../images/bg-light.jpeg'
import darkbg from '../images/bg-dark.jpeg'
import lightLogo from '../images/darkmode-light.svg'
import darkLogo from '../images/darkmode-dark.svg'

function Layout(props) {
    const [content, setContent] = useState('home')
    const [darkMode, setDarkMode] = useState(false)
    let contentToShow = <HomePage2 />

    useEffect(()=>{
        if (!darkMode) {
            setStylesForLight()
        }
        else {
            setStylesForDark()
        }
    },[darkMode])
    
    const navBarItemClickHandler = (e) => {
        setContent(e)
    }

    const setStylesForDark = () => {
        document.getElementById('App').style = "color: white;"
        document.querySelectorAll('.button').forEach(element => {
            element.style = "color: white; border-color: white;"
        });
        document.querySelectorAll('.header').forEach(element => {
            element.style = "color: white;"
        });
        document.getElementById('background-overlay').style="background-color: #0000007d;" 
    }
    
    const setStylesForLight = () => {
        document.getElementById('App').style = "color: black;"
        document.querySelectorAll('.button').forEach(element => {
            element.style = "color: black; border-color: black;"
        });
        document.querySelectorAll('.header').forEach(element => {
            element.style = "color: black;"
        });
        document.getElementById('background-overlay').style="background-color: #rgba(255, 255, 255, 0.150);" 
    }


    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    }
    
    if (content === 'home') { contentToShow = <HomePage2 setStylesForDark={setStylesForDark} setStylesForLight={setStylesForLight} darkMode={darkMode} setContent={setContent} /> }
    else { contentToShow = <ProjectsPage setStylesForDark={setStylesForDark} setStylesForLight={setStylesForLight} darkMode={darkMode}/> }

    return (
        <div class="layout">
            <div class="navbar">
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('home')}>Logo</button> */}
                <button class="navbarItem button" onClick={() => navBarItemClickHandler('home')}>Home</button>
                <button class="navbarItem button" onClick={() => navBarItemClickHandler('projects')}>Projects</button>
                <a id="navbarItem-github-btn"href="https://github.com/abishekh-manoharan/portfolio-website" target='_'><button class="navbarItem button" >GitHub</button></a>
                <button class="navbarItem button" id="darkModeLogo" onClick={darkModeHandler}>
                    {darkMode ? 
                    <img src={lightLogo} className="darkModeLogo"/>  
                    : <img src={darkLogo} className="darkModeLogo"/>  
                    }
                </button>
                {/* <img src={lightLogo} class="navbarItem button" onClick={darkModeHandler}/> */}
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('resume')}>Resume</button> */}
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('contacts')}>Contact</button> */}
            </div>

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
                    <img src={darkbg} className="background-img"/>
                </div>
                : 
                <div className="bg">
                    <div id="background-overlay" />
                    <img src={lightbg} className="background-img"/>
                </div>
            }
        </div>
    );
}

export default Layout;