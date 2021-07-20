import React from 'react';

const CoinData = ({ details }) => {
	const renderDetails = () => {
		if (details) {
			return (
				<div className="bg-white mt-3 p-2 rounded border row">
					<div className="col-sm">
						<div className="d-flex flex-column">
							<span className="text-muted coin-data-category">Market Cap</span>
							<span>{details.market_cap}</span>
						</div>
						<hr />
						<div className="d-flex flex-column">
							<span className="text-muted coin-data-category">Total Supply</span>
							<span>{details.total_supply}</span>
						</div>
					</div>

					<div className="col-sm">
						<div className="d-flex flex-column">
							<span className="text-muted coin-data-category">Volume (24H)</span>
							<span>{details.total_volume}</span>
						</div>
						<hr />
						<div className="d-flex flex-column">
							<span className="text-muted coin-data-category">High (24H)</span>
							<span>{details.high_24h}</span>
						</div>
					</div>

					<div className="col-sm">
						<div className="d-flex flex-column">
							<span className="text-muted coin-data-category">Circulating Supply</span>
							<span>{details.circulating_supply}</span>
						</div>
						<hr />
						<div className="d-flex flex-column">
							<span className="text-muted coin-data-category">Low (24H)</span>
							<span>{details.low_24h}</span>
						</div>
					</div>
				</div>
			);
		}
	}

	return (
		<div>
			{renderDetails()}
		</div>
	);
}

export default CoinData;