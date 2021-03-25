import React from 'react';
import './LandingPage.css'
import dice from '../../images/perspective-dice-six-faces-four.png'

export default function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <h2>Welcome to Play Packet!</h2>
            <div className='container'>
                <div className='left'>
                    <p>We gonna put a screenshot here</p>
                </div>
                <div className='right'>
                    <div className='bullet'>
                        <img src={dice} alt='' height='30px' />
                        <p>
                            Did you know that it's against the rules of Uno to stack
                            draw 2's on top of each other?
                        </p>
                    </div>
                    <div className='bullet'>
                        <img src={dice} alt='' height='30px' />
                        <p>
                            Crazy Right?!?  We think so
                        </p>
                    </div>
                    <div className='bullet'>
                        <img src={dice} alt='' height='30px' />
                        <p>
                            Here at Play Packet, you can create your OWN House Rules and share them
                            with everyone else
                        </p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='left'>
                    <div className='bullet'>
                        <img src={dice} alt='' height='30px' />
                        <p>
                            So get logged in and show us the <span>REAL</span> way
                            to play Settlers of Catan
                        </p>
                    </div>
                    <div className='bullet'>
                        <img src={dice} alt='' height='30px' />
                        <p>
                            Or whatever
                        </p>
                    </div>
                </div>
                <div className='right'>
                    <p>Other Screenshot?</p>
                </div>
            </div>
        </div>
    )
}