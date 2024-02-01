import React, { useState } from 'react';
import '../css/Form.css';

interface FormProps {
    onSubmit: (formData: FormData) => void;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Form = ({ onSubmit }: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [firstNameError, setFirstNameError] = useState<string | null>(null);
    const [lastNameError, setLastNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate first name
        if (name === 'firstName') {
            const isValid = isNameValid(value);
            setFirstNameError(isValid ? null : 'First name should contain only letters.');
        }

        // Validate last name
        if (name === 'lastName') {
            const isValid = isNameValid(value);
            setLastNameError(isValid ? null : 'Last name should contain only letters.');
        }

        // Validate email
        if (name === 'email') {
            const isValid = isEmailValid(value);
            setEmailError(isValid ? null : 'Invalid email format. Please enter a valid email address.');
        }
        // Validate password
        if (name === 'password') {
            const isValid = isPasswordValid(value);
            setPasswordError(isValid ? null : 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        }
    };

    // Validate password
    const isNameValid = (name: string): boolean => {
        const nameRegex = /^[A-Za-z]+$/;
        return nameRegex.test(name);
    };

    const isEmailValid = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };

    return (
        <form className='form-box' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <div className='error-box'>
                {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
                {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
            <button className='form-button' type="submit">Sign Up</button>
        </form>
    );
};

export default Form;
