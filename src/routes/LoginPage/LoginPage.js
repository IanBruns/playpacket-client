import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage(props) {
    return (
        <div className='sign-in'>
            <h2>Sign in</h2>
            <LoginForm whenLoggedIn={props.whenLoggedIn} />
            <p>
                Don't have an account? <br />
                <Link to='/register'>Sign up</Link>
            </p>
        </div>
    )
}