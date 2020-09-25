export interface Loadable {
  isLoading: boolean;
  isResolving: boolean;
  error?: Error;
}

export enum ContentType {
  json = 'application/json',
  formUrlEncoded = 'application/x-www-form-urlencoded',
}

export interface QueryStringData {
  [key: string]: string | number | boolean;
}

export interface PostData {
  [key: string]: string | number | boolean;
}

export interface AuthToken {
  access_token: string;
  token_type: 'Bearer';
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export interface StoredAuthToken extends AuthToken {
  received: number;
}

export interface PagedResponse<S> {
  href: string;
  items: S[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PlaylistSnapshots {
  [playlistId: string]: string;
}

export interface PlaylistTracks {
  [playlistId: string]: string[];
}

export interface SpotifyImage {
  height: number | null;
  width: number | null;
  url: string;
}

export interface SpotifyUser {
  display_name: string;
  href: string;
  id: string;
  images: SpotifyImage[];
  uri: string;
}

export interface SpotifyPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    [name: string]: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyUser;
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

interface SpotifyArtist {
  external_urls: {
    [name: string]: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface SpotifyAlbum {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: {
    [name: string]: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: 'day' | 'year';
  total_tracks: number;
  type: string;
  uri: string;
}

export interface SpotifyTrackInfo {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: {
    [name: string]: string;
  };
  external_urls: {
    [name: string]: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

export interface SpotifyTrack {
  added_at: string;
  added_by: {
    external_urls: {
      [name: string]: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: string | null;
  track: SpotifyTrackInfo;
  video_thumbnail: {
    url: string | null;
  };
}

export interface StoredSpotifyTrack extends Omit<SpotifyTrack, 'track'> {
  track: string;
}

export interface StoredSpotifyTrackInfo {
  [trackId: string]: {
    album: string;
    artists: string[];
  } & Omit<SpotifyTrackInfo, 'album' | 'artists'>;
}

export interface StoredSpotifyAlbums {
  [albumId: string]: {
    artists: string[];
  } & Omit<SpotifyAlbum, 'artists'>;
}

export interface StoredSpotifyArtists {
  [artistId: string]: SpotifyArtist;
}

export interface StoredPlaylistTracks {
  [playlistId: string]: StoredSpotifyTrack[];
}

export interface SpotifyDataExport {
  tracks: StoredSpotifyTrack[];
  trackInfo: StoredSpotifyTrackInfo;
  artists: StoredSpotifyArtists;
  albums: StoredSpotifyAlbums;
}
