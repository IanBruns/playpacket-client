import React from 'react';

export default function renderLogoutLink(props) {
    return (
        <div className='Header__logged-in'>
            <Link className='center'
                onClick={props.handleLogoutClick}
                to='/'>
                Logout
                </Link>
        </div>
    )
}