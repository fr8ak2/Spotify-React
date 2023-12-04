import { getData } from '@lib/api';
import { SearchResults } from '@lib/types';
import { type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    const res = await getData(`https://api.spotify.com/v1/search?q=${query}&type=album,track,artist,playlist&limit=50`);
    const data = (await res) as SearchResults;

    return Response.json(data, { status: 200 });
};
