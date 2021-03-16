import React, { useState, useEffect } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function RulesPage(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGames()
            .then(userGames => {
                setGames(userGames);
            })
    })

    const gameOptions = games.map(game => {
        return (
            <p>{game.game_name}</p>
        )
    })

    return (
        <>
            <h2>RulesPage!</h2>
            {gameOptions}
        </>
    )
}