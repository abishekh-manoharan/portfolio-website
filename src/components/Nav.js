import React from 'react';

function Nav({ darkMode, darkModeHandler, setContent, setNavOpen }) {
  const handleProjectsBtnClick = () => {
    setContent('projects')
    setNavOpen(false)
  }
  const handleHomeBtnClick = () => {
    setContent('home')
    setNavOpen(false)
  }

  return (
    <div id="nav-bar">
      <button class="nav-option" onClick={handleHomeBtnClick}>Home</button>
      <button class="nav-option" onClick={handleProjectsBtnClick}>Projects</button>
      <a class="nav-option-a" href="https://github.com/abishekh-manoharan/portfolio-website" target="_"><button class="nav-option" style={{margin:'auto'}}>GitHub</button></a>
      <button class="nav-option" onClick={darkModeHandler}>{darkMode ? <>Light Mode</> : <>Dark Mode</>}</button>
    </div>
  );
}

export default Nav;