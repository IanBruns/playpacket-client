import React from 'react';
import add from '../../images/plus.png';

export default function SearchResultRule(props) {
    const handleAddClicked = () => {
        console.log('test')
    }
    return (
        <div className='rule'>
            <img src={add} alt='' height='25px'
                onClick={() => handleAddClicked()} />
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}