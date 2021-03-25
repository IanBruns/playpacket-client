import React from 'react';
import add from '../../images/plus.png';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SearchResultRule(props) {
    const handleAddClicked = () => {
        PlayPacketApiService.postUserRule(props.title, props.description, props.game_id)
            .then(() => {
                console.log('Rule added!');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='rule'>
            <img className='click-icon' src={add} alt='' height='25px'
                onClick={() => handleAddClicked()} />
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}