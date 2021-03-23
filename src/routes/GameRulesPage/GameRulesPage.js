import React, { useState, useEffect } from 'react'
import AddRuleForm from '../../components/AddRuleForm/AddRuleForm';
import UserRule from '../../components/UserRule/UserRule';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function GamesRulesPage(props) {
    //form control
    const [adding, setAdding] = useState(false);
    //Inital render
    const [name, setName] = useState('')
    const [rules, setRules] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getGameName(props.match.params.gameId)
            .then(game => {
                setName(game.game_name);
            })
        PlayPacketApiService.getUserGameRules(props.match.params.gameId)
            .then(gameRules => {
                setRules(gameRules);
            })
    }, [props.match.params.gameId]);

    function afterPost(newRule) {
        const addRule = rules;
        addRule.push(newRule)
        setRules(addRule);
        setAdding(false);
    }
    const mapRules = rules.map(rule => {
        return (
            <UserRule key={rule.id} id={rule.id}
                rule_title={rule.rule_title}
                rule_description={rule.rule_description}
                handleDeleteClicked={handleDeleteClicked} />
        )
    })

    function handleDeleteClicked(rule_id) {
        PlayPacketApiService.deleteUserRule(rule_id)
            .then(() => {
                const filterRules = rules.filter(rule => rule.id !== rule_id)
                setRules(filterRules);
            })
            .catch(err => {
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
                <AddRuleForm game_id={props.match.params.gameId}
                    afterPost={(newRule) => afterPost(newRule)} />
            )}
        </div>
    )
}