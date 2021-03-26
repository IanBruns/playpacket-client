import React, { useState, useEffect } from 'react';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function SideBar(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGames()
            .then(userGames => {
                setGames(userGames);
            })
    }, [])

    return (
        <p>
            SideBar!
        </p>
    )
}