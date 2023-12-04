import { getAccessToken } from '@lib/token';

export const getApiBaseUrl = () => {
    return (process.env.NEXT_PUBLIC_SPOTIFY_API_URL as string).replace(/\/$/, '');
};

export const getApiTokenUrl = () => {
    return (process.env.NEXT_PUBLIC_SPOTIFY_API_TOKEN_URL as string).replace(/\/$/, '');
};

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

export const basic_auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export const getData = async (url: string) => {
    const { access_token } = await getAccessToken();

    const resp = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: access_token ? `Bearer ${access_token}` : 'No Auth',
        },
    });

    if (!resp.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: unknown = await resp.json();
    return data;
};
