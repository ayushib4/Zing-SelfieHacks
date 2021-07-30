import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import fire from "./firebase"

function Main() {

    const handleLogout = () => {
        fire.auth().signOut();
    }

    return (
        <Router>
            <Navbar handleLogout={handleLogout} />
            <Switch>
                <Route path='/' exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Main;
