import React, { useState, useEffect } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function ResultsPage(props) {
    const [name, setName] = useState('');
    const [rules, setRules] = useState([]);

    useEffect(() => {
        PlayPacketApiService.getSearchResults(props.match.params.gameId)
            .then(gameRules => {
                setRules(gameRules);
                setName(gameRules[0].game_name)
            })
    }, [props.match.params.gameId]);

    const mapRules = rules.map(rule => {
        return (
            <div className='rule' key={rule.id}>
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