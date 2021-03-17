import React from 'react';
import { Link } from 'react-router-dom';

export default function GameSearchSelect(props) {
    return (
        <div className='game-select'>
            <p>{props.game_name}</p>
            <Link to={`/Results/${props.id}`}>
                <button>
                    Search!
                </button>
            </Link>
        </div>
    )
}