import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import About from '../components/About';
// import Contact from '../components/Contact';



function Index() {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<AboutPage />} /> */}
                {/* more routes */}
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
}


export default Index;
