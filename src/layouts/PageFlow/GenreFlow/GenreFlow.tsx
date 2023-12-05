'use client';

import { PlaylistList } from '@components/PlaylistList/PlaylistList';
import { SearchResults } from '@lib/types';
import { Tag } from '@shared/Tag/Tag';
import { FC, useCallback, useEffect, useState } from 'react';

interface GenreProps {
	slug: string;
}

export const GenreFlow: FC<GenreProps> = ({ slug }) => {
	const [genreItems, setGenreItems] = useState<SearchResults | null>(null);

	const genreList = useCallback(async () => {
		const resp = await fetch(`/api/genre/${slug}`);
		const json = (await resp.json()) as SearchResults;

		setGenreItems(json);
	}, [slug]);

	useEffect(() => {
		genreList().catch(e => console.error(e));
	}, [genreList]);

    return (
        <>
            <Tag type="h2" visualType="h2">Genre</Tag>
            <PlaylistList playlists={genreItems?.playlists?.items} />
        </>
    );
};
