import React from 'react';
import HomeOptions from '../../components/HomeOptions/HomeOptions';

export default function HomePage(props) {
    const options = ['MyRules', 'Search'].map((field, i) => {
        return (
            <HomeOptions field={field} key={i} />
        )
    })

    return (
        <div className='HomePage'>
            <h2>HomePage!</h2>
            {options}
        </div>
    )
}