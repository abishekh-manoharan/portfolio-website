import React from 'react';
import ProjectsPage from './ProjectsPage';

function Layout(props) {
    return (
        <div class="layout">
            <div class="navbar">
                <div class="navbarItem1">b</div>
                <div class="navbarItem2">b</div>
                <div class="navbarItem3">a</div>
            </div>

            <div class="content">
                <ProjectsPage/>
            </div>

            <div class="footer">

            </div>
        </div>
    );
}

export default Layout;