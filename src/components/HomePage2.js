import React from 'react';
import pic from '../images/profile.png'

function HomePage2(props) {
    return (
        <div className="homePage">
          <div className="greeting">Hello! I am</div>
          <div className="name">
            <strong>ABISHEKH MANOHARAN</strong>
          </div>
          <i className="occupation">Software Developer</i>
          <div className="about">
            I am a hard working individual, who is eager to learn an expand my
            horizons. I find personal satisfaction in creating software that the end
            user loves, and in working with teams to meet that end.
          </div>
          <button className="button">Projects</button>
          <button className="button2 button">Contact Me</button>
          <div className="profile">
            <img src={pic} id="profile-pic" />
          </div>
        </div>
      );
}

export default HomePage2;