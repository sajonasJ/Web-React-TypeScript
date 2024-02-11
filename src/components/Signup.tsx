import React, { useState } from 'react';
import Form from '../body/Form';
import '../css/Signup.css';

// Define FormDataType interface for form data
interface FormDataType {
    [key: string]: any;
}
// SignUp component
const SignUp = () => {
    // Define state for signup status
    const [signupStatus, setSignupStatus] = useState<'success' | 'error' | null>(null);

    // Handle signup
    const handleSignUp = async (formData: FormDataType) => {
        try {
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Set signup status to success
            setSignupStatus('success');
            // Log form data
            console.log('Form Data:', formData);
        } catch (error) {
            // Set signup status to error
            setSignupStatus('error');
            // Log error
            console.error('Signup error:', error);
        }
    };
    // Render SignUp component
    return (
        <div className='signup-box'>
            {signupStatus === 'success' && <p>Sign up successful!</p>}
            {signupStatus === 'error' && <p>Oops! Something went wrong. Please try again.</p>}
            <Form onSubmit={handleSignUp} />
        </div>
    );
};

export default SignUp;