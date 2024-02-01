import React, { useState } from 'react';
import Form from '../body/Form';
import '../css/Signup.css';

interface FormDataType {
    [key: string]: any;
}

const SignUp = () => {
    const [signupStatus, setSignupStatus] = useState<'success' | 'error' | null>(null);

    const handleSignUp = async (formData: FormDataType) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSignupStatus('success');
            console.log('Form Data:', formData);
        } catch (error) {
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