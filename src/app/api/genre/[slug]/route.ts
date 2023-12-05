import { getData } from '@lib/api';
import { SearchResults } from '@lib/types';

export const GET = async (params: { params: { slug: string } }) => {
    const res = await getData(
        `https://api.spotify.com/v1/search?q=${params}&type=album,track,artist,playlist&limit=28`,
    );
    const data = (await res) as SearchResults;

    return Response.json(data, { status: 200 });
};
