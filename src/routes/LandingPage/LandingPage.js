import React from 'react';
import './LandingPage.css'
import pizza from '../../images/photos/pizza.jpg';
import { Link } from 'react-router-dom';
import LandingBullets from '../../components/LandingBullets/LandingBullets';

export default function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <h2>Welcome to Play Packet!</h2>
            <div className='container'>
                <div className='left'>
                    <img src={pizza} alt='' height='400px' />
                </div>
                <div className='right'>
                    <LandingBullets />
                </div>
            </div>
            <div className='centered'>
                <p>Ready to show Uno they can't boss us around?</p>
                <p>Then Sign up, and Either make your own rules</p>
                <p>Or search and copy what our other users have been doing!</p>
                <Link to='/Register'>
                    Let's get started!
                </Link>
            </div>
        </div>
    )
}