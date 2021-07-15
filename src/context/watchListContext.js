import { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
	const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple', 'litecoin']);

	const deleteCoin = coinToDelete => {
		setWatchList(watchList.filter(coin => coin !== coinToDelete));
	}

	return (
		<WatchListContext.Provider value={{ watchList, deleteCoin }}>
			{children}
		</WatchListContext.Provider>
	);
}