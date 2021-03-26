import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlayPacketApiService from '../../services/playpacket-api-service';
import RulesOptions from '../RulesOptions/RulesOptions'

export default function SideBar(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        if (props.category === 'search') {
            PlayPacketApiService.getAllGames()
                .then(results => {
                    setGames(results);
                })
        } else {
            PlayPacketApiService.getUserGames()
                .then(userGames => {
                    setGames(userGames);
                })
        }
    }, [props.category])

    let gamesButtons

    if (props.category === 'usersgames') {
        gamesButtons = games.map(game => {
            return (
                <RulesOptions key={game.id} id={game.id} name={game.game_name} break={true} />
            )
        })
    } else {
        gamesButtons = games.map(game => {
            return (
                <div key={game.id}>
                    <Link to={`Results/${game.id}`}>
                        <button>
                            {game.game_name}
                        </button>
                    </Link>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            <button onClick={props.goBack}>
                Back
            </button>
            <br />
            {gamesButtons}

            {props.category === 'usersgames' && (
                <Link to='/Add'>
                    <button>
                        Add Game
                </button>
                </Link>
            )}
        </React.Fragment>
    )
}