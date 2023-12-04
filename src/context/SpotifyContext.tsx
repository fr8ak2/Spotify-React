'use client';

import { SearchResults, Track } from '@lib/types';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface ContextProps {
    searchResults: SearchResults | null;
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    fetchSearchResults?: (query: string) => void;
    currentTrack: Track | null;
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
    tracksQueue: Track[];
    setTracksQueue: Dispatch<SetStateAction<Track[]>>;
}

const SpotifyContext = createContext({} as ContextProps);

export const SpotifyProvider = ({ children }: any) => {
    const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
    const [tracksQueue, setTracksQueue] = useState<Track[]>([]);
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [query, setQuery] = useState('');

    const fetchSearchResults = async () => {
        try {
            const resp = await fetch(`/api/search?q=${query}`);
            const json = (await resp.json()) as SearchResults;
            setSearchResults(json);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <SpotifyContext.Provider
            value={{
                query,
                setQuery,
                searchResults,
                currentTrack,
                setCurrentTrack,
                tracksQueue,
                setTracksQueue,
            }}>
            {children}
        </SpotifyContext.Provider>
    );
};

export const useSpotify = () => useContext(SpotifyContext);
