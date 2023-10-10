import React from 'react';

function Nav({ darkMode, darkModeHandler, setContent, setNavOpen }) {
  const handleProjectsBtnClick = () => {
    setContent('projects')
    setNavOpen(false)
  }

  return (
    <div id="nav-bar">
      <button class="nav-option">Home</button>
      <button class="nav-option" onClick={handleProjectsBtnClick}>Projects</button>
      <button class="nav-option">GitHub</button>
      <button class="nav-option" onClick={darkModeHandler}>Dark Mode</button>
    </div>
  );
}

export default Nav;