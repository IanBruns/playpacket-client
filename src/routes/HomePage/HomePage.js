import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    const options = ['Rules', 'Search', 'Add'].map((field, i) => {
        return (
            <>
                <div className={'option'} key={i}>
                    <Link to={`${field}`}>
                        <p>
                            {field}
                        </p>
                    </Link>
                </div>
            </>
        )
    })

    return (
        <div className='HomePage'>
            <h2>HomePage!</h2>
            {options}
        </div>
    )
}