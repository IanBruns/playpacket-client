import React, { useState, useEffect } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SearchPage(props) {
    const [search, setSearch] = useState('');
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
            <form className='game-search'>
                <label htmlFor='game'>Seach by Game Name:</label>
                <br />
                <input type='text' placeholder="Enter Game" name='game-search'
                    value={search} onChange={e => setSearch(e.target.value)} />
            </form>
            {games}
        </div>
    )
}