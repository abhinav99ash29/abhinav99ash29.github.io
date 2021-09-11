import React, { useState, useEffect } from 'react';
import MainContainer from '../styles/commonStyles';
import { Grid, Paper } from '@material-ui/core';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import path from 'path';

const Resume = (props) => {
    const [numPages, setNumPages] = useState(false);

    const onDoeumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    return (
        <MainContainer>
            <Grid container alignItems="center" direction="column">
            <Document
            file={path.resolve(__dirname, '../vendors/resume.pdf')}
            onLoadSuccess={onDoeumentLoadSuccess}
            >   
                <Grid container alignItems="center" spacing={2} direction="column" className="grid-container">
                    { Array(numPages).fill().map((element, index) => index + 1).map((index) => (
                        <Grid item className="max-width-60rem" key={index}>
                            <Paper className="description-paper">
                                <Page pageNumber={index} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Document>
            </Grid>
        </MainContainer>
    );
};

export default Resume;