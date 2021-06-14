import { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
    const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple', 'litecoin']);

    return (
        <WatchListContext.Provider value={{ watchList }}>
            {children}
        </WatchListContext.Provider>
    );
}