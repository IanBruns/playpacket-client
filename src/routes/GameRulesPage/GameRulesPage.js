import React, { useState, useEffect } from 'react'
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function GamesRulesPage(props) {
    //form control
    const [loading, setLoading] = useState(false);
    const [adding, setAdding] = useState(false);
    //For the Post requests
    const [rule_title, setRule_title] = useState('');
    const [rule_description, setRule_description] = useState('');
    //Inital render
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
        setLoading(true);

        PlayPacketApiService.postUserRule(rule_title, rule_description, props.match.params.gameId)
            .then(newRule => {
                const addRule = rules;
                addRule.push(newRule)
                setRules(addRule);
                setLoading(false)
                setAdding(false);
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
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
                        <input type='text' placeholder='Enter Rule Title' name='rule_title'
                            value={rule_title} onChange={e => setRule_title(e.target.value)} />
                    </div>
                    <div className='form-options'>
                        <label htmlFor='rule_description'>Rule Description*</label>
                        <br />
                        <input type='text' placeholder='Enter Rule Description'
                            name='rule_description' required
                            value={rule_description} onChange={e => setRule_description(e.target.value)} />
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