import { getApiBaseUrl, getData } from '@lib/api';
import { SearchResults } from '@lib/types';

export const GET = async (request: Request, params: { params: { query: string } }) => {
    const res = await getData(`${getApiBaseUrl()}/search?q=${params}&type=album,track,artist,playlist&limit=12`);
    const data = (await res) as SearchResults;

    return Response.json(data, { status: 200 });
};
