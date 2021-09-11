import React from "react";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Landing from "./common/components/landing";
import { hot } from "react-hot-loader";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const App = (props) => {

  const theme = createTheme({});

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Landing />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default hot(module)(withRouter(App));