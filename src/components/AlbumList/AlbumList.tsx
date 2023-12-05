import { Item } from '@components/Item/Item';
import { ItemGrid } from '@components/ItemGrid/ItemGrid';
import { Album } from '@lib/types';
import { FC } from 'react';

interface AlbumListProps {
    albums?: Album[];
}

export const AlbumList: FC<AlbumListProps> = ({ albums }) => {

    return (
        <ItemGrid>
            {albums?.map(album => (
                <Item
                    key={album.id}
                    id={album.id}
                    heading={album.name}
                    images={album.images}
                    alt={album.name}
                    subheading={album.artists[0].name}
                    type="album"
                />
            ))}
        </ItemGrid>
    );
};
