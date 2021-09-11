import React from 'react';
import MainContainer from '../styles/commonStyles';
import { Avatar, Grid, Paper } from '@material-ui/core';
import { about } from '../utility/staticData';

const About = (props) => {
    // TODO change the avatar link reset
    return (
        <MainContainer>
            <Grid container alignItems="center" spacing={2} direction="column" className="grid-container">
                <Grid item>
                    <Avatar alt="Abhinav's pic" src="../vendors/avatar.jpg" className="avatar-img" /> 
                </Grid>
                <Grid item className="max-width-45rem">
                    <Paper className="description-paper">
                        <p className="body-text">{about.aboutText}</p>
                    </Paper>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default About;