import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import historyOptions from '../chartConfigs/chartConfigs';

const HistoryChart = ({ data }) => {
	const canvasRef = useRef(null);
	const chartRef = useRef(null);
	const isFirstRender = useRef(true);
	const { day, week, year, detail } = data;
	const [timeFormat, setTimeFormat] = useState('24h');

	const determineTimeFormat = () => {
		switch (timeFormat) {
			case '24h':
				return day;
			case '7d':
				return week;
			case '1y':
				return year;
			default:
				return day;
		}
	}

	useEffect(() => {
		if (canvasRef && canvasRef.current && detail) {
			chartRef.current = new Chart(canvasRef.current, {
				type: 'line',
				data: {
					datasets: [{
						label: `${detail.name} price`,
						backgroundColor: 'rgba(15, 17, 129, 0.5)',
						borderColor: 'rgba(15, 17, 129, 0.4)',
						pointRadius: 0,
						data: determineTimeFormat(),
					}]
				},
				options: historyOptions
			});
			isFirstRender.current = false;
		}
	}, []);

	useEffect(() => {
		if (!isFirstRender.current) {
			chartRef.current.data.datasets[0].data = determineTimeFormat();
			chartRef.current.update();
		}
	});

	const renderPrice = () => {
		if (detail) {
			return (
				<>
					<p className="my-0">RM{detail.current_price.toFixed(2)}</p>
					<p className={
						detail.price_change_24h < 0 ? 'text-danger my-0' : 'text-success my-0'
					}>{detail.price_change_percentage_24h.toFixed(2)}%</p>
				</>
			);
		}
	}

	return (
		<div className="bg-white border mt-2 rounded p-3">
			<div>{renderPrice()}</div>
			<div>
				<canvas ref={canvasRef} id="my-chart" width="250" height="250"></canvas>
			</div>
			<div className="chart-button mt-1">
				<button className="btn btn-outline-secondary btn-sm" onClick={() => setTimeFormat('24h')}>24h</button>
				<button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => setTimeFormat('7d')}>7d</button>
				<button className="btn btn-outline-secondary btn-sm" onClick={() => setTimeFormat('1y')}>1y</button>
			</div>
		</div>
	);
}

export default HistoryChart;
