import React, { useState, useEffect } from 'react'
import UserRule from '../../components/UserRule/UserRule';
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

    function resetStates() {
        setLoading(false);
        setAdding(false);
        setRule_title('');
        setRule_description('');
    }

    const game_id = props.match.params.gameId;
    const mapRules = rules.map(rule => {
        return (
            <UserRule key={rule.id} id={rule.id}
                rule_title={rule.rule_title}
                rule_description={rule.rule_description}
                handleDeleteClicked={handleDeleteClicked} />
        )
    })

    function handleRuleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        PlayPacketApiService.postUserRule(rule_title, rule_description, game_id)
            .then(newRule => {
                const addRule = rules;
                addRule.push(newRule)
                setRules(addRule);
                resetStates();
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }

    function handleDeleteClicked(rule_id) {
        console.log({ rule_id })
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