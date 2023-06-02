import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react'
import projectsService from '../services/projectsService'
import Projects from './Projects';
import ProjectsFilter from './ProjectsFilter';
import ProjectsFilterAndSort from './ProjectsFilterAndSort';
import Project from './Project';

function ProjectsPage(props) {
    const [tags, setTags] = useState(["Website", "Mobile Application", "MVVM", "MVC", "AI", "React", "EJS", "Express", "Room", "MongoDB", "NoSQL", "SQL", "CSS", "HTML", "Java", "JavaScript", "Python", "Flask", "Individual Project", "Group Project", "Academic Project", "Personal Project", "Demo", "Deployed"])
    const [activeTags, setActiveTags] = useState([])
    const [projectsToShow, setProjectsToShow] = useState([])
    const [allProjects, setAllProjects] = useState([
        {
            "id": 1,
            "name": "Portfolio Website",
            "description": "This was a personal project I developed as a means for displaying my projects to my peers and potential employers. It allows the user to view basic information about me, view a list of my projects, filter projects by tags, and to view my resume.\n\nIt was built purely using React.",
            "deployed": false,
            "demo": false,
            "siteLink": "google.ca",
            "githubLink": "https://github.com/abishekh-manoharan/portfolio-website",
            "demoLink": "https://youtube.com",
            "images": ["https://placekitten.com/150/150","https://placekitten.com/150/150","https://placekitten.com/150/150"],
            "tags": ["React", "HTML", "JavaScript", "CSS", "Individual Project", "Personal Project", "Website"]
        },
        {
            "id": 2,
            "name": "CheckMyPlant Website",
            "description": "In this academic project, I worked within a team of 8 to develop a website that allowed end users to determine if a cauliflower is diseased using an AI model which we trained ourselves. Users can upload an image of a cauliflower and receive their results on a separate page. \n\nJupyter Notebook and Python was used to create, train, and export the AI model. Flask was used for web-page routing and as an API to make predictions. For the front-end, vanilla JavaScript, HTML, and CSS was used.",
            "deployed": false,
            "demo": true,
            "siteLink": "google.ca",
            "githubLink": "https://github.com/abi-manoharan97/CheckMyPlant",
            "demoLink": "https://youtu.be/pz4aPWHdSLQ",
            "images": ["https://placekitten.com/150/150","https://placekitten.com/150/150","https://placekitten.com/150/150"],
            "tags": ["AI", "Demo", "Flask", "HTML", "JavaScript", "Python", "CSS", "Group Project", "Academic Project", "Website"]
        },
        {
            "id": 3,
            "name": "Student Grade Prediction Website",
            "description": "In this academic project, me and two others created a website that allows users to predict the writing score of students based on parameters such as parental eduction level, lunch availability, and completion of a test prepatation course. \n\nWe used python with Jupyter notebook to create, train, and export the model as well as to clean the data. Flask was used to create an API that returns a prediction based on specified parameters. React was used for the front-end. A more detailed explanation of the system architecture is available in the video demo linked below.",
            "deployed": true,
            "demo": true,
            "siteLink": "https://aifinalprojectg4.onrender.com/",
            "githubLink": "https://github.com/stars/abishekh-manoharan/lists/ai-gp",
            "demoLink": "https://youtu.be/LMXY5_AL0tI",
            "images": ["https://placekitten.com/150/150","https://placekitten.com/150/150","https://placekitten.com/150/150"],
            "tags": ["AI", "Demo", "Flask", "HTML", "JavaScript", "React", "Python", "CSS", "Deployed", "Group Project", "Academic Project", "Website"]
        },
        {
            "id": 4,
            "name": "GrabATable Website",
            "description": "In this academic project, I worked within a team of 9 to develop a web application that served as a platform for users to find and book with restaurants. \n\nDuring this project, we implemented agile methodologies such as regular meetings, scrums, and taking an iterative approach to the development of the website. We used EJS, html, and css for the front end, Express for the back-end, and MongoDB for the database.",
            "deployed": false,
            "demo": true,
            "siteLink": "",
            "githubLink": "https://github.com/COMP231Team/GrabATable",
            "demoLink": "https://vimeo.com/780006081?share=copy#t=1068",
            "images": ["https://placekitten.com/150/150","https://placekitten.com/150/150","https://placekitten.com/150/150"],
            "tags": ["MVC", "CSS", "Demo", "EJS", "Express", "Group Project", "HTML", "JavaScript", "MongoDB", "NoSQL", "Website"]
        },
        {
            "id": 5,
            "name": "Bloodbank Website",
            "description": "This academic project was created as part of the Java EE course at Centennial College. It allows the user to create, read, update, and delete data relating to a blood bank company. \n\nThere are three subservices associated with the blood bank: patient service, blood stock service, and blood bank service. SQL was used to create and interact with the database. HTML and CSS was used for the front-end. Spring Framework and Java was used for the backend.",
            "deployed": false,
            "demo": true,
            "siteLink": "",
            "githubLink": "https://github.com/abishekh-manoharan/BloodBankWebsite",
            "demoLink": "https://youtu.be/onljbCRj9jc",
            "images": ["https://placekitten.com/150/150","https://placekitten.com/150/150","https://placekitten.com/150/150"],
            "tags": ["MVC", "CSS", "Demo", "HTML", "Java", "SQL", "Individual Project", "Academic Project", "Website"]
        },
        {
            "id": 6,
            "name": "Centennial Library Mobile Application",
            "description": "This academic project was created as part of the Mobile Application Development course at Centennial College. It supports 2 types of users: Student and Librarian. The student user type can view and check out books from the library database. The librarian can view and manage the books database. \n\nThe application was programmed using JAVA and has a repository-based MVVM architecture. It uses Room database for persistence and has live-data features.",
            "deployed": false,
            "demo": false,
            "siteLink": "",
            "githubLink": "https://github.com/abishekh-manoharan/BloodBankWebsite",
            "demoLink": "https://youtu.be/onljbCRj9jc",
            "images": ["https://placekitten.com/150/150","https://placekitten.com/150/150","https://placekitten.com/150/150"],
            "tags": ["MVVM", "Java", "Room", "XML", "Mobile Application","Individual Project", "Academic Project"]
        }
    ])

    useEffect(()=>{
        setProjectsToShow(allProjects)
    }, [])

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        console.log('filter value: '+filterValue)
        let updatedActiveTags = []

        if(!activeTags.includes(filterValue)){
            console.log('adding tag: ', filterValue);
            
            // updating style to indicate that the tag is active
            e.target.style="opacity:50%"

            updatedActiveTags = activeTags.concat(filterValue)
            console.log('updatedActiveTags: ', updatedActiveTags);
        }

        else {
            console.log('Deactivating tag:' , filterValue);

            // updating style to indicate that the tag is no longer active
            e.target.style="opacity:100%"
            updatedActiveTags = [...activeTags]
            updatedActiveTags.splice(activeTags.indexOf(filterValue),1)
            console.log('updated active tags: ',updatedActiveTags)
        }
        // filter projectsToShow based on the condition that a project includes every active tag
        const updatedProjectsToShow = allProjects.filter((project) => {return updatedActiveTags.every((tag)=>project.tags.includes(tag))})
        console.log('updatedProjectsToShow: after filter',updatedProjectsToShow);
        
        const updatedActiveTagsConst = [...updatedActiveTags]

        setProjectsToShow(updatedProjectsToShow)
        setActiveTags(updatedActiveTagsConst)
    }


    const handleCancelFilter = () => {
        const tagButtons = document.getElementsByClassName('tagsButton')
        for (let tag of tagButtons) {
            tag.style = "opacity=100%"
        }      
        setProjectsToShow(allProjects)
        setActiveTags([])
    }

    return (
        <div>
            <ProjectsFilterAndSort tags={tags} handleFilter={handleFilter} handleCancelFilter={handleCancelFilter}/>
            <Projects projectsToShow={projectsToShow}/>
        </div>
    );
}

export default ProjectsPage;