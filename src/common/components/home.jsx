import React, { useEffect, useState } from 'react';
import MainContainer from '../styles/commonStyles';
import { Paper, Grid, useTheme } from '@material-ui/core';
import { home } from '../utility/staticData';
import Projects from './projects';

const Home = (props) => {

    const theme = useTheme();

    const [isPortable, setIsPortable] = useState(false);

    const resizeHandler = () => {
        if (window.innerWidth < theme.breakpoints.values['md']) {
            setIsPortable(true);
        } else {
            setIsPortable(false);
        }
    };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
  } , [])

    return (
        <MainContainer>
            <Grid 
            container
            spacing={2}
            className="grid-container"
            >
                <Grid item xl={6} lg={6} md={6} s={12}>
                    <Paper className="description-paper">
                        <p className="title-text">{home.greet}</p>
                        <p className="body-text">{home.description}</p>
                    </Paper>
                </Grid>
                <Grid item xl={6} lg={6} md={6} s={12}>
                    <Paper className="description-paper">
                       <Projects isPortable={ isPortable } />
                    </Paper>
                </Grid>
            </Grid>
        </MainContainer>
    );
};

export default Home;