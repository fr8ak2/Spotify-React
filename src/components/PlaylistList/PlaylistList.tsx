import { Item } from '@components/Item/Item';
import { ItemGrid } from '@components/ItemGrid/ItemGrid';
import { PlaylistType } from '@lib/types';
import { FC } from 'react';

interface PlaylistProps {
    playlists?: PlaylistType[];
}

export const PlaylistList: FC<PlaylistProps> = ({ playlists }) => {
    return (
        <ItemGrid>
            {playlists?.map(playlist => (
                <Item
                    key={playlist.id}
                    id={playlist.id}
                    heading={playlist.name}
                    subheading={playlist.description}
                    alt={playlist.name}
                    images={playlist.images}
                    type="playlist"
                />
            ))}
        </ItemGrid>
    );
};
