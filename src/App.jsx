import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { WatchListContextProvider } from './context/watchListContext'
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './components/Header';
import './App.css';

const App = () => {
	return (
		<div className="container">
			<WatchListContextProvider>
				<Router>
					<Header />
					<Route exact path="/" component={CoinSummaryPage}></Route>
					<Route path="/coins/:id" component={CoinDetailPage}></Route>
				</Router>
			</WatchListContextProvider>
		</div>
	);
}

export default App;