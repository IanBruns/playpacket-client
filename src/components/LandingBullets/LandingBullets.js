import React from 'react';
import dice from '../../images/icons/perspective-dice-six-faces-four.png'

export default function LandingBullets(props) {
    return (
        <React.Fragment>
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
            <div className='bullet'>
                <img src={dice} alt='' height='30px' />
                <p>
                    So Log in/get signed up, and show people the real way play settlers of catan
                    or whatever
                        </p>
            </div>
            <div className='bullet'>
                <img src={dice} alt='' height='30px' />
                <p>If you want to demo the site and see what we're about, come on in! (Be gentle please)</p>
            </div>
            <div className='bullet'>
                <img src={dice} alt='' height='30px' />
                <p>username: test_man</p>
            </div>
            <div className='bullet'>
                <img src={dice} alt='' height='30px' />
                <p>password: pass</p>
            </div>
        </React.Fragment>
    )
}