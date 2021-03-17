import React, { useState, useEffect } from 'react'
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function GamesRulesPage(props) {
    const [rules, setRules] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGameRules(props.match.params.gameId)
            .then(gameRules => {
                setRules(gameRules);
            })
    }, []);

    return (
        <div className='GamesRulesPage'>
            <p>Eyyyyy Steve!</p>
        </div>
    )
}