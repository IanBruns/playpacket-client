import React from 'react';
import add from '../../images/plus.png';

export default function SearchResultRule(props) {
    return (
        <div className='rule'>
            <img src={add} alt='' height='25px' />
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}