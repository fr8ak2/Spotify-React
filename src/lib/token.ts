import { basic_auth, getApiTokenUrl } from '@lib/api';

import { AccessToken } from './types';

export const getAccessToken = async () => {
    const body = new URLSearchParams({ grant_type: 'client_credentials' });
    const headers = new Headers({
        Authorization: basic_auth ? `Basic ${basic_auth}` : 'No Auth',
        'Content-Type': 'application/x-www-form-urlencoded',
    });

    const resp = await fetch(getApiTokenUrl(), { method: 'POST', headers, body });

    return (await resp.json()) as AccessToken;
};
