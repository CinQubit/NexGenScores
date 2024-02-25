import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Welcome to NexGenScores!</h1>
            <p className="mb-4">Introduction: Briefly explain what the website does and its unique value proposition.</p>
            <nav className="mb-4">
                <ul className="flex">
                    <li className="mr-4"><Link to="/sports">Sports</Link></li>
                    <li className="mr-4"><Link to="/predictions">Predictions</Link></li>
                    <li className="mr-4"><Link to="/how-it-works">How It Works</Link></li>
                    <li className="mr-4"><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <section>
                <h2 className="text-xl font-bold mb-2">Featured Predictions</h2>
                {/* Add your featured predictions here */}
            </section>
        </div>
    );
};

export default Home;
