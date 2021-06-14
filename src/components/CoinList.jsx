import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const { watchList } = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchCoinData = async () => {
            setIsLoading(true); // Trigger loading
            const params = new URLSearchParams({
                vs_currency: 'myr',
                ids: watchList.join(','),
                order: 'market_cap_desc'
            });

            const response = await fetch(`${coinGecko.baseURL}/coins/markets?${params}`);
            const coinData = await response.json()
            setCoins(coinData)
            setIsLoading(false);
        }

        fetchCoinData();
    }, []);

    const renderCoins = () => {
        if (isLoading) {
            return (<div>Loading...</div>);
        }

        return (
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => <Coin key={coin.id} coin={coin} />)}
            </ul>
        )
    }

    return (
        <div>
            {renderCoins()}
        </div>
    )
}

export default CoinList
