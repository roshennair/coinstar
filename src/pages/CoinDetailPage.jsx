import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetailPage = () => {
	const { id } = useParams();

	return (
		<div>
			Coin Detail Tings
		</div>
	);
}

export default CoinDetailPage;
