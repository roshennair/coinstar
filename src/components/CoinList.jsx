import React, { useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko';

const CoinList = () => {
    const [coins, setCoins] = useState([]);

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
