import React from 'react';
import MainContainer from '../styles/commonStyles';
import NavBar from './navbar';
import { Switch, Route, withRouter } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import About from './aboutMe';
import Resume from './resume';

const Landing = () => {

    return (
        <MainContainer>
            <NavBar/>
            <div className="landing">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/home' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        <Route path='/resume' component={Resume} />
                    </Switch>
            </div>
        </MainContainer>
    );
};


export default Landing;