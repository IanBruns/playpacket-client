import React from 'react';
import './LandingPage.css'
import pizza from '../../images/photos/pizza.jpg';
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <h2>Welcome to Play Packet!</h2>
            <div className='container'>
                <div className='left'>
                    <img src={pizza} alt='' height='300px' />
                </div>
                <div className='right'>
                    <LandingPage />
                </div>
            </div>
            <div className='centered'>
                <p>Ready to show Uno they can't boss us around?</p>
                <Link to='/Register'>
                    Let's get started!
                </Link>
            </div>
        </div>
    )
}