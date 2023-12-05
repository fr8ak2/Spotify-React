import { AlbumList } from '@components/AlbumList/AlbumList';
import { PlaylistList } from '@components/PlaylistList/PlaylistList';
import { SearchResults } from '@lib/types';
import { Tag } from '@shared/Tag/Tag';
import { DayTimes } from '@utils/utils.datetime';
import { FC, useCallback, useEffect, useState } from 'react';

import styles from './LandingFlow.module.scss';

export const LandingFlow: FC<SearchResults> = () => {
    const [releasesItems, setReleasesItems] = useState<SearchResults | null>(null);
    const [featuredItems, setFeaturedItems] = useState<SearchResults | null>(null);

    const releasesList = useCallback(async () => {
        const resp = await fetch(`/api/releases`);
        const json = (await resp.json()) as SearchResults;

        setReleasesItems(json);
    }, []);

    const featuredList = useCallback(async () => {
        const resp = await fetch(`/api/featured`);
        const json = (await resp.json()) as SearchResults;

        setFeaturedItems(json);
    }, []);

    useEffect(() => {
        releasesList().catch(e => console.log(e));
        featuredList().catch(e => console.log(e));
    }, [releasesList, featuredList]);

    return (
        <>
            <div className={styles.heading}>
                <Tag type="h1">Good {DayTimes()}!</Tag>
            </div>

            <div className={styles.releases}>
                <Tag type="h2" visualType="h4">
                    New Releases
                </Tag>
                <AlbumList albums={releasesItems?.albums?.items} />
            </div>

            <div className={styles.featured}>
                <Tag type="h2" visualType="h4">
                    Popular Playlist
                </Tag>
                <PlaylistList playlists={featuredItems?.playlists?.items} />
            </div>
        </>
    );
};
