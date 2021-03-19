import React from 'react';

export default function UserRule(props) {
    return (
        <div className='rule'>
            <p>{props.rule_title}</p>
            <p>{props.rule_description}</p>
        </div>
    )
}