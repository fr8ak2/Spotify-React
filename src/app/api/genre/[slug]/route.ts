import { getApiBaseUrl, getData } from '@lib/api';
import { SearchResults } from '@lib/types';

export const GET = async (params: { params: { slug: string } }) => {
    const res = await getData(`${getApiBaseUrl()}/browse/categories/${params}/playlists?country=LV&limit=30`);
    const data = (await res) as SearchResults;

    return Response.json(params, { status: 200 });
};
