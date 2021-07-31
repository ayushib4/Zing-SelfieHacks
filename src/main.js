import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from "./pages/Home"
import { ResultPage } from './pages/ResultPage';
import fire from "./firebase"
import Fade from 'react-reveal/Fade';

function Main() {

    const handleLogout = () => {
        fire.auth().signOut();
    }

    return (
        <Router>
            <Fade top>
                <Navbar handleLogout={handleLogout} />
            </Fade>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/search' exact component={ResultPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Main;
