import React from 'react';
import HomeOptions from '../../components/HomeOptions/HomeOptions';

export default function HomePage(props) {
    const options = ['Rules', 'Search', 'Add'].map((field, i) => {
        return (
            <HomeOptions field={field} />
        )
    })

    return (
        <div className='HomePage'>
            <h2>HomePage!</h2>
            {options}
        </div>
    )
}