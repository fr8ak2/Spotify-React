export interface AccessToken {
    access_token?: string;
    token_type?: string;
    expires_in?: number;
}

interface Image {
    height: number | undefined;
    url: string | null;
    width: number | undefined;
}

export interface Album {
    id: string;
    name: string;
    artists: [Artist];
    images: [Image];
    album_type?: string;
    release_date?: string;
    tracks?: {
        total: number;
        items: Track[];
    };
}

export interface Artist {
    id: string;
    name: string;
    images?: [Image];
    followers?: {
        total: number;
    };
    genres?: [string];
}

export interface Track {
    id: string;
    name: string;
    album: Album;
    artists: [Artist];
    duration_ms: number;
    preview_url: string;
}

export interface PlaylistType {
    description?: string;
    id: string;
    followers?: {
        total?: number;
    };
    images?: [Image];
    name: string;
    owner?: {
        id: string;
        display_name?: string;
    };
    items?: [{ added_at: string; track: Track }];
    tracks?: {
        items?: [{ added_at: string; track: Track }];
        total: number;
    };
    type?: string;
    total?: number;
}

export interface Category {
	id: string;
	name: string;
	icons?: [Image];
	artists: [Artist];
}

export interface Categories {
	categories?: {
		items: Category[];
	}
}

export interface SearchResults {
    albums: {
        items: Album[];
    };
    artists: {
        items: Artist[];
    };
    playlists: {
        items: PlaylistType[];
    };
    tracks: {
        items: Track[];
    };
}
