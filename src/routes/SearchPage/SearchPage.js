import React, { useState, useEffect } from 'react';
import GameSearchSelect from '../../components/GameSearchSelect/GameSearchSelect';
import RuleAddSelect from '../../components/RuleAddSelect/RuleAddSelect';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SearchPage(props) {
    const [search, setSearch] = useState('');
    const [allGames, setAllGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getAllGames()
            .then(games => {
                setAllGames(games);
            })
    }, [])

    const filterGames = allGames.filter(game => {
        return game.game_name.toLowerCase().includes(search.toLowerCase());
    })

    let games;
    (props.searchType === 'Search')
        ? games = filterGames.map(game => {
            return (
                <GameSearchSelect key={game.id} id={game.id}
                    game_name={game.game_name} />
            )
        })
        : games = filterGames.map(game => {
            return <RuleAddSelect key={game.id} id={game.id}
                game_name={game.game_name} />
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