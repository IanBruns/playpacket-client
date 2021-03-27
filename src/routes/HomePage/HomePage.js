import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h2>Welcome to Play Packet!</h2>
            <h3>What do you want to do?</h3>
            <div className='MyRules'>
                <h3>My Rules</h3>
                <p>Here's where we have stored your rules</p>
                <p>Select a game (We'll oinly display games you have rules for)</p>
                <p>You can view and add rules to all games as well</p>
                <Link to='/MyRules'>
                    <button>
                        My Rules
                    </button>
                </Link>
            </div>
            <div className='search'>

            </div>
        </div>
    )
}