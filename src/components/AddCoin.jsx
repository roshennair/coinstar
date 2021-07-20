import React, { useContext } from 'react';
import { WatchListContext } from '../context/watchListContext';

const AddCoin = () => {
	const { addCoin } = useContext(WatchListContext);
	const availableCoins = ['bitcoin', 'ethereum', 'ripple', 'tether', 'bitcoin-cash', 'litecoin', 'eos', 'okb', 'tezos', 'cardano'];

	return (
		<div className="btn-group dropdown">
			<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Add Coin
			</button>
			<ul className="dropdown-menu">
				{
					availableCoins.map((coin, i) => (
						<li key={i} onClick={() => { addCoin(coin) }}>
							<button className="dropdown-item">{coin}</button>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default AddCoin;