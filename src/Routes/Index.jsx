import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import your components for each route
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Home from '../components/Home';
// import About from '../components/About';
// import Contact from '../components/Contact';
function Index() {
    return (
        <Router>
            {/* <Header /> Add the header component */}
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            {/* <Footer /> Add the footer component */}
        </Router>
    );
}

export default Index;
