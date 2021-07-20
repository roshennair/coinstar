import { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
	// Get previously stored watchlist if it exists when the component first renders
	const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem('watchList')) || []);

	// Update local storage whenever watchlist changes
	useEffect(() => {
		localStorage.setItem('watchList', JSON.stringify(watchList));
	}, [watchList]);

	const deleteCoin = coinToDelete => {
		setWatchList(watchList.filter(coin => coin !== coinToDelete));
	}

	const addCoin = coinToAdd => {
		if (!watchList.includes(coinToAdd)) setWatchList(watchList.concat(coinToAdd));
	}

	return (
		<WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
			{children}
		</WatchListContext.Provider>
	);
}