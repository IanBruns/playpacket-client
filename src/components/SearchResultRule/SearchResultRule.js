import React, { useState } from 'react';
import add from '../../images/plus.png';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SearchResultRule(props) {
    const [message, setMessage] = useState(false);

    const handleAddClicked = () => {
        PlayPacketApiService.postUserRule(props.title, props.description, props.game_id)
            .then(() => {
                setMessage(true);
                setTimeout(() => {
                    setMessage(false);
                }, 5000)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='rule'>
            <img className='click-icon' src={add} alt='' height='25px'
                onClick={() => handleAddClicked()} />
            {message && (
                <p>Rule has been added to your collection!</p>
            )}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}