import React from "react";

import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';
import { HashRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

function Header() {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/About" />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Resume">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;