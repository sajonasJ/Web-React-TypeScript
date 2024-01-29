import React, { useState } from 'react';
import Form from '../body/Form';
import '../css/Signup.css';


const SignUp: React.FC = () => {
    const [signupStatus, setSignupStatus] = useState<'success' | 'error' | null>(null);

    const handleSignUp = async (formData: any) => {
        try {
            // Simulate an API call or any asynchronous operation
            // Replace this with your actual signup logic
            // For demonstration purposes, we'll just set a timeout
            // to simulate an asynchronous operation
            await new Promise(resolve => setTimeout(resolve, 1000));

            // If successful, set the signup status to 'success'
            setSignupStatus('success');
            console.log('Form Data:', formData);
        } catch (error) {
            // If there's an error, set the signup status to 'error'
            setSignupStatus('error');
            console.error('Signup error:', error);
        }
    };

    return (
        <div className='signup-box'>
            {signupStatus === 'success' && <p>Sign up successful!</p>}
            {signupStatus === 'error' && <p>Oops! Something went wrong. Please try again.</p>}
            <Form onSubmit={handleSignUp} />
        </div>
    );
};

export default SignUp;
