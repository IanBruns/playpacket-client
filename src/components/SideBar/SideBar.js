import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlayPacketApiService from '../../services/playpacket-api-service';
import RulesOptions from '../RulesOptions/RulesOptions'

export default function SideBar(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGames()
            .then(userGames => {
                setGames(userGames);
            })
    }, [])

    const gamesButtons = games.map(game => {
        return (
            <RulesOptions key={game.id} id={game.id} name={game.game_name} break={true} />
        )
    })

    return (
        <React.Fragment>
            <button onClick={props.goBack}>
                Back
            </button>
            <br />
            {gamesButtons}
            <Link to='/Add'>
                <button>
                    Add
                </button>
            </Link>
        </React.Fragment>
    )
}