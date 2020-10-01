import { atom } from 'recoil';

import {
  PlaylistSnapshots,
  StoredPlaylistTracks,
  StoredSpotifyAlbums,
  StoredSpotifyArtists,
  StoredSpotifyTrackInfo,
} from '../types';
import {
  getStoredAlbums,
  getStoredArtists,
  getStoredPlaylistSnapshots,
  getStoredPlaylistTracks,
  getStoredTrackInfo,
} from '../utils/storage';

export const playlistSnapshots = atom<PlaylistSnapshots>({
  key: 'PlaylistSnapshots',
  default: {}, // getStoredPlaylistSnapshots(),
});

export const albums = atom<StoredSpotifyAlbums>({
  key: 'Albums',
  default: {}, // getStoredAlbums(),
});

export const artists = atom<StoredSpotifyArtists>({
  key: 'Artists',
  default: {}, // getStoredArtists(),
});

export const trackInfo = atom<StoredSpotifyTrackInfo>({
  key: 'TrackInfo',
  default: {}, // getStoredTrackInfo(),
});

export const playlistTracks = atom<StoredPlaylistTracks>({
  key: 'PlaylistTracks',
  default: {}, // getStoredPlaylistTracks(),
});
