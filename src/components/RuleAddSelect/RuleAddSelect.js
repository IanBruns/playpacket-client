import React, { useState } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service'

export default function RuleAddSelect(props) {
    const [adding, setAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rule_title, setRule_title] = useState('');
    const [rule_description, setRule_description] = useState('');

    function handleRuleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        PlayPacketApiService.postUserRule(rule_title, rule_description, props.game_id)
            .then(newRule => {
                //What do to after Rule posts
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }

    return (
        <div className='RuleAddSelect'>
            <p>{props.game_name}</p>
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