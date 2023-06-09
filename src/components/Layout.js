import React from 'react';
import { useState } from 'react'
import HomePage from './HomePage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';
import Footer from './Footer';

function Layout(props) {
    const [content, setContent] = useState('home')
    let contentToShow = <HomePage/>

    const navBarItemClickHandler = (e) => {
        setContent(e)
    }

    if(content==='home'){
        contentToShow = <HomePage setContent={setContent}/>
    }
    else {
        contentToShow=<ProjectsPage/>
    }
    // else if (content==='projects'){
    //     contentToShow=<ProjectsPage/>
    // }
    // else {
    //     contentToShow=<ResumePage/>
    // }

    return (
        <div class="layout">
            <div class="navbar">
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('home')}>Logo</button> */}
                <button class="navbarItem" onClick={()=>navBarItemClickHandler('home')}>Home</button>
                <button class="navbarItem" onClick={()=>navBarItemClickHandler('projects')}>Projects</button>
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('resume')}>Resume</button> */}
                {/* <button class="navbarItem" onClick={()=>navBarItemClickHandler('contacts')}>Contact</button> */}
            </div>

            <div class="content">
                {contentToShow}
            </div>

            <div class="footer">
                {/* <Footer/> */}
            </div>
        </div>
    );
}

export default Layout;