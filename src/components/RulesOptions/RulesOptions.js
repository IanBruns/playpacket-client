import React from 'react';
import { Link } from 'react-router-dom';

export default function RulesOptions(props) {
    return (
        <Link to={`/Rules/${props.id}`}>
            <button>
                {props.name}
            </button>
        </Link>
    )
}