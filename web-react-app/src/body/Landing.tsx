import React from 'react';
import { Link } from 'react-router-dom';

// LandingPage component
function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Welcome to Our Website!</h1>
            <p>Please log in or sign up to continue.</p>

            <Link to="/Main">
                <button>Log In</button>
            </Link>

            <Link to="/Signup">
                <button>Sign Up</button>
            </Link>
        </div>
    );
}

export default LandingPage;