import { getApiBaseUrl, getData } from '@lib/api';
import { Album } from '@lib/types';

export const GET = async () => {
    const res = await getData(`${getApiBaseUrl()}/browse/featured-playlists?country=LV&limit=12`);
    const data = (await res) as Album;

    return Response.json(data, { status: 200 });
};
