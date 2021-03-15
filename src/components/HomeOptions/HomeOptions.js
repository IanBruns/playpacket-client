import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeOptions(props) {
    return (
        <div className='HomeOption'>
            <Link to={`${props.field}`}>
                <p>
                    {props.field}
                </p>
            </Link>
        </div>
    )
}