'use client';

import { AlbumList } from '@components/AlbumList/AlbumList';
import ArtistList from '@components/ArtistsList/ArtistList';
import { PlaylistList } from '@components/PlaylistList/PlaylistList';
import { SearchResults } from '@lib/types';
import { Tag } from '@shared/Tag/Tag';
import { ISO } from '@utils/utils.datetime';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import styles from '../SearchResults.module.scss';

interface SearchProps {
    params: {
        query: string;
    };
}

const Search = ({ params }: SearchProps) => {
    const query = params.query;
    const [searchItems, setSearchItems] = useState<SearchResults | null>(null);

    const searchList = useCallback(async () => {
        const resp = await fetch(`/api/search/${query}`);
        const json = (await resp.json()) as SearchResults;

        setSearchItems(json);
    }, [query]);

    useEffect(() => {
        searchList().catch(e => console.log(e));
    }, [searchList]);

    return (
        <>
            {searchItems && (
                <>
                    <div className={styles.songs}>
                        <Link href={`/search/${query}/tracks`}>
                            <Tag type="h1" visualType="h3">
                                Songs
                            </Tag>
                        </Link>

                        <div className={styles.songsInner}>
                            {searchItems.tracks?.items?.slice(0, 5).map(track => (
                                <div
                                    className={clsx(styles.songsItem, !track.preview_url ? '--disabled' : '')}
                                    key={track.id}>
                                    <div className={styles.songsInfo}>
                                        <div className={styles.songsImg}>
                                            <Image
                                                src={track.album?.images[0]?.url || ''}
                                                width={track.album?.images[0]?.width}
                                                height={track.album?.images[0]?.height}
                                                alt={track.name}
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className={styles.songsDesc}>
                                            <div className={styles.songsTitle}>{track.name}</div>

                                            <div className={styles.songsText}>
                                                <span>
                                                    {track.artists.map((artist, index) => (
                                                        <Link key={artist.id} href={`/artist/${artist.id}`}>
                                                            <span>
                                                                {index !== 0 ? `, ${artist.name}` : artist.name}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.songsDuration}>{ISO(track.duration_ms)}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {searchItems.artists.items.length > 0 && (
                        <div className={styles.songsArtists}>
                            <Link href={`/search/${query}/artists`}>
                                <Tag type="h2" visualType="h3">
                                    Artists
                                </Tag>
                            </Link>
                            <ArtistList artists={searchItems.artists.items.slice(0, 6)} />
                        </div>
                    )}

                    {searchItems.albums.items.length > 0 && (
                        <div className={styles.songsAlbums}>
                            <Link href={`/search/${query}/albums`}>
                                <Tag type="h2" visualType="h3">
                                    Albums
                                </Tag>
                            </Link>
                            <AlbumList albums={searchItems.albums.items.slice(0, 6)} />
                        </div>
                    )}

                    {searchItems.playlists.items.length > 0 && (
                        <div className={styles.songsPlaylists}>
                            <Link href={`/search/${query}/playlists`}>
                                <Tag type="h2" visualType="h3">
                                    Playlists
                                </Tag>
                            </Link>
                            <PlaylistList playlists={searchItems.playlists.items.slice(0, 6)} />
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Search;
