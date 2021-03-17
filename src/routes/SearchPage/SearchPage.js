import React, { useState, useEffect } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SearchPage(props) {
    const [allGames, setAllGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getAllGames()
            .then(games => {
                setAllGames(games);
            })
    })

    const games = allGames.map(game => {
        return (
            <p key={game.id}>{game.game_name}</p>
        )
    })

    return (
        <div className='SearchPage'>
            <h2>SearchPage!</h2>
            {games}
        </div>
    )
}