import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

function Header(props) {
    const [loggedIn, setLoggedIn] = useState(props.isLoggedIn)
    useEffect(() => {
        setLoggedIn(props.isLoggedIn)
    }, [props.isLoggedIn])

    function handleLogoutClick() {
        TokenService.clearAuthToken();
        props.whenLoggedOut();
    }

    function renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link className='center'
                    onClick={handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    function renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/register'>
                    Register
                </Link>
                <br />
                <Link
                    to='/login'>
                    Log in
                </Link>
            </div>
        )
    }

    return (
        <nav className='Header'>
            <Link to='/home'>
                <h1>Play Packet</h1>
            </Link>

            {(loggedIn === true)
                ? renderLogoutLink()
                : renderLoginLink()}
        </nav>
    )
}

export default Header;