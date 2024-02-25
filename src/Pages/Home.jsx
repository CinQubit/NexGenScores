import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Welcome to NexGenScores!</h1>
            <p>Introduction: Briefly explain what the website does and its unique value proposition.</p>
            <nav>
                <ul>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/predictions">Predictions</Link></li>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <section>
                <h2>Featured Predictions</h2>
                {/* Add your featured predictions here */}
            </section>
        </div>
    );
};

export default Home;
