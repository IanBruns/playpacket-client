import React, { useState, useEffect } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service';
import add from '../../images/plus.png'

export default function ResultsPage(props) {
    const [name, setName] = useState('');
    const [rules, setRules] = useState([]);

    useEffect(() => {
        PlayPacketApiService.getGameName(props.match.params.gameId)
            .then(game => {
                setName(game.game_name);
            })
        PlayPacketApiService.getSearchResults(props.match.params.gameId)
            .then(gameRules => {
                setRules(gameRules);
            })
    }, [props.match.params.gameId]);

    const mapRules = rules.map(rule => {
        return (
            <div className='rule' key={rule.id}>
                <img src={add} alt='' height='25px' />
                <p>{rule.rule_title}</p>
                <p>{rule.rule_description}</p>
            </div>
        )
    })

    return (
        <div className='GamesRulesPage'>
            <h2>Rules For: {name}</h2>
            {mapRules}
        </div>
    )
}