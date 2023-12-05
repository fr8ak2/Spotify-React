import { Item } from '@components/Item/Item';
import { ItemGrid } from '@components/ItemGrid/ItemGrid';
import { Artist } from '@lib/types';

interface ArtistList {
    artists?: Artist[];
}

export default function ArtistList({ artists }: ArtistList) {
    return (
        <ItemGrid>
            {artists?.map(artist => (
                <Item
                    id={artist.id}
                    heading={artist.name}
                    images={artist.images}
                    alt={artist.name}
                    subheading="Artist"
                    key={artist.id}
                    type="artist"
                />
            ))}
        </ItemGrid>
    );
}
