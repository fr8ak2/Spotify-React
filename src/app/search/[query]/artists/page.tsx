'use client';

import ArtistList from '@components/ArtistsList/ArtistList';
import { SearchResults } from '@lib/types';
import { Tag } from '@shared/Tag/Tag';
import { FC, useCallback, useEffect, useState } from 'react';

interface ArtistsProps {
    params: {
        query: string;
    };
}

const SearchArtists: FC<ArtistsProps> = ({ params }) => {
    const query = params.query;
    const [searchArtistsList, setSearchArtists] = useState<SearchResults | null>(null);

    const searchList = useCallback(async () => {
        const resp = await fetch(`/api/search/${query}/artists`);
        const json = (await resp.json()) as SearchResults;

        setSearchArtists(json);
    }, [query]);

    useEffect(() => {
        searchList().catch(e => console.log(e));
    }, [searchList]);
    return (
        <>
            <Tag type="h1" visualType="h3">
                {`All artists for "${query}"`}
            </Tag>
            <ArtistList artists={searchArtistsList?.artists.items} />
        </>
    );
};

export default SearchArtists;
