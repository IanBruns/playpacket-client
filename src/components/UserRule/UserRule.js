import React from 'react';
import trash from '../../images/garbage.png'
import edit from '../../images/edit.png'

export default function UserRule(props) {
    return (
        <div className='rule'>
            <p>{props.rule_title}</p>
            <p>{props.rule_description}</p>
            <img src={trash} alt='delete' height='20px' />
            <img src={edit} alt='edit' height='20px' />
        </div>
    )
}