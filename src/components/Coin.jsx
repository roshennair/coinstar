import React from 'react'
import { Link } from 'react-router-dom';

const Coin = ({ coin, deleteCoin }) => {
	return (
		<Link to="/coindetail" className="text-decoration-none my-1 coin">
			<li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
				<img className="coinlist-image" src={coin.image} alt={coin.id} />
				<span className="text-decoration-none">RM{coin.current_price}</span>
				<span className={`text-${coin.price_change_percentage_24h < 0 ? 'danger' : 'success'} mr-2`}>
					<i className={`las la-sort-${coin.price_change_percentage_24h < 0 ? 'down' : 'up'} align-middle mr-1`}></i>
					{Math.round(coin.price_change_percentage_24h * 100) / 100}%
				</span>
				<i className="las la-times-circle delete-icon text-danger" onClick={e => {
					e.preventDefault();
					deleteCoin(coin.id);
				}}></i>
			</li>
		</Link>
	);
}

export default Coin;
