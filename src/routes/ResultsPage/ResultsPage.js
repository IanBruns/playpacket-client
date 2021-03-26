import React, { useState, useEffect } from 'react';
import './ResultsPage.css'
import SearchResultRule from '../../components/SearchResultRule/SearchResultRule';
import SideBar from '../../components/SideBar/SideBar';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function ResultsPage(props) {
    const [game, setGame] = useState({});
    const [rules, setRules] = useState([]);

    useEffect(() => {
        PlayPacketApiService.getGameName(props.match.params.gameId)
            .then(game => {
                setGame(game);
            })
        PlayPacketApiService.getSearchResults(props.match.params.gameId)
            .then(gameRules => {
                setRules(gameRules);
            })
    }, [props.match.params.gameId]);

    const mapRules = rules.map(rule => {
        return (
            <SearchResultRule key={rule.id} title={rule.rule_title}
                description={rule.rule_description} game_id={game.id} />
        )
    })

    return (
        <div className='GamesRulesPage'>
            <div className='content'>
                <div className='Sidebar results'>
                    <SideBar category='search'
                        goBack={props.history.goBack} />
                </div>
                <div className='userRules'>
                    <h2>Rules For: {game.game_name}</h2>
                    {mapRules}
                </div>
            </div>
        </div>
    )
}