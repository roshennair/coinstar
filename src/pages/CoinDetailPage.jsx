import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import coinGecko from '../apis/coinGecko';
import HistoryChart from '../components/HistoryChart';
import CoinData from '../components/CoinData';

const CoinDetailPage = () => {
	const { id } = useParams();

	const [coinData, setCoinData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true); // Trigger loading

			const dayParams = new URLSearchParams({
				vs_currency: 'myr',
				days: '1'
			});
			const weekParams = new URLSearchParams({
				vs_currency: 'myr',
				days: '7'
			});
			const yearParams = new URLSearchParams({
				vs_currency: 'myr',
				days: '365'
			});
			const detailParams = new URLSearchParams({
				vs_currency: 'myr',
				ids: id
			});

			const response = await Promise.all([
				fetch(`${coinGecko.baseURL}/coins/${id}/market_chart?${dayParams}`),
				fetch(`${coinGecko.baseURL}/coins/${id}/market_chart?${weekParams}`),
				fetch(`${coinGecko.baseURL}/coins/${id}/market_chart?${yearParams}`),
				fetch(`${coinGecko.baseURL}/coins/markets?${detailParams}`)
			]);

			const dayData = await response[0].json();
			const weekData = await response[1].json();
			const yearData = await response[2].json();
			const detailData = await response[3].json();

			setCoinData({
				day: dayData.prices,
				week: weekData.prices,
				year: yearData.prices,
				detail: detailData[0]
			});
			setIsLoading(false);
		}

		fetchData();
	}, []);

	const renderData = () => {
		if (isLoading) {
			return (<div>Loading...</div>);
		}

		return (
			<div className="coinlist">
				<HistoryChart />
				<CoinData />
			</div>
		);
	}

	return renderData();
}

export default CoinDetailPage;
