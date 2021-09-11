import React from 'react';
import MainContainer from '../styles/commonStyles';
import { Grid, Paper, TextField, TextareaAutosize, Button } from '@material-ui/core';
import { contact } from '../utility/staticData';

const Contact = (props) => {

    return (
        <MainContainer>
            <Grid container alignItems="center" direction="column" className="grid-container">
                <Grid item className="max-width-45rem">
                    <Paper className="description-paper padding-left-right-2rem">
                        <p className="body-text">{contact.reachText}&nbsp;<span className="body-text bold">{contact.email}</span></p>
                        <p className="info-text">{contact.orText}</p>
                        <Grid container spacing={3} direction="column">
                            <Grid item>
                                <TextField label="Name" type="text"/>
                            </Grid>
                            <Grid item>
                                <TextField label="Email" type="email" />
                            </Grid>
                            <Grid item>
                                <TextareaAutosize className="margin-top-2rem" minRows={5} placeholder="Message"/>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className="color-info-light min-width-6rem" disabled>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </MainContainer>
    );
};

export default Contact;