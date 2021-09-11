import React, { useContext } from 'react';
import MainContainer from '../styles/commonStyles';
import { home } from '../utility/staticData';
import { Paper, Link } from '@material-ui/core';
import { useEffect } from 'react';


const Projects = (props) => {
    const { isPortable } = props;
    return (
        <MainContainer>
            <p className="title-text">{home.projects.title}</p>
            {isPortable &&  <p className="info-text">{home.projects.infoTitleSmScreen}</p>}
            { home.projects.projectsArray.map((project) => (
                <Link href={project.link} target="_blank" key={project.title} underline="none">
                    <Paper className="description-paper bottom-margin-2rem hover-link" elevation={5}>
                        <p className="title-text">{project.title}</p>
                        <p className="body-text">{project.description}</p>
                    </Paper>
                </Link>
            ))}
        </MainContainer>
    );
};


export default Projects;