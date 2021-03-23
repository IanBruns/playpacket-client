import React, { useState } from 'react';
import plus from '../../images/plus.png';
import AddRuleForm from '../AddRuleForm/AddRuleForm'

export default function RuleAddSelect(props) {
    const [adding, setAdding] = useState(false);

    function afterPost() {
        setAdding(false);
    }

    return (
        <div className='RuleAddSelect'>
            <p>{props.game_name}</p>

            <img src={plus} alt='' height='25px'
                onClick={() => setAdding(!adding)} />

            { adding && (
                <AddRuleForm game_id={props.game_id}
                    afterPost={(newRule) => afterPost(newRule)} />
            )}
        </div>
    )
}