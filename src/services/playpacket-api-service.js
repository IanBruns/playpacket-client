import TokenService from './token-service';
import config from '../config';

const PlayPacketApiService = {
    getUserGames() {
        return fetch(`${config.API_ENDPOINT}/games`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAllGames() {
        return fetch(`${config.API_ENDPOINT}/games/all`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default PlayPacketApiService;