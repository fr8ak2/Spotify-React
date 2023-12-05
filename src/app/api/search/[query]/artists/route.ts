import { getApiBaseUrl, getData } from '@lib/api';
import { SearchResults } from '@lib/types';

export const GET = async (params: { params: { query: string } }) => {
    const res = await getData(`${getApiBaseUrl()}/search?q=${params}&type=artist&limit=12`);
    const data = (await res) as SearchResults;

    return Response.json(data, { status: 200 });
};
