import React, { useState, useEffect } from 'react'
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function GamesRulesPage(props) {
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);

    const [name, setName] = useState('')
    const [rules, setRules] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGameRules(props.match.params.gameId)
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

    function handleRuleSubmit(e) {
        e.preventDefault();
        console.log('boop');
    }

    return (
        <div className='GamesRulesPage'>
            <h2>Rules For: {name}</h2>
            {mapRules}

            <button onClick={() => setAdding(!adding)}>
                Add
            </button>

            {adding && (
                <form onSubmit={e => handleRuleSubmit(e)}>
                    <div className='form-options'>
                        <label htmlFor='rule_title'>Rule Title</label>
                        <br />
                        <input type='text' placeholder='Enter Rule Title' name='rule_title' />
                    </div>
                    <div className='form-options'>
                        <label htmlFor='rule_description'>Rule Description*</label>
                        <br />
                        <input type='text' placeholder='Enter Rule Description'
                            name='rule_description' required />
                    </div>
                    <button type="submit" className='myButton'
                        disabled={loading}>
                        {loading
                            ? 'Hang Tight'
                            : 'Add Rule'}
                    </button>
                </form>
            )}
        </div>
    )
}