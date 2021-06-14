import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const { watchList } = useContext(WatchListContext);
    console.log(watchList);
    useEffect(() => {
        const fetchCoinData = async () => {
            const params = new URLSearchParams({
                vs_currency: 'myr',
                ids: 'bitcoin,ethereum',
                order: 'market_cap_desc'
            });

            const response = await fetch(`${coinGecko.baseURL}/coins/markets?${params}`);
            const data = await response.json()
            console.log(data);
        }

        fetchCoinData();
    }, []);

    return (
        <div>

        </div>
    )
}

export default CoinList
