import { writable as persistantWritable } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';

export const ConfigStore = persistantWritable('config', {
  privateUUID: '',
  sponsorBlockApi: 'https://sponsor.ajay.app',
  showPrivateUUID: false,
});

export const CacheStore = persistantWritable('cache', {
  totalstats: {
    apiUsers: 0,
    userCount: 0,
    viewCount: 0,
    totalSubmissions: 0,
    minutesSaved: 0,
  },
  totalstats_time: 0,
});

export const UserInfoStore = persistantWritable('userinfo', {
  _lastUpdateTime: 0,
  userID: '',
  userName: '',
  minutesSaved: 0,
  segmentCount: 0,
  ignoredSegmentCount: 0,
  viewCount: 0,
  ignoredViewCount: 0,
  warnings: 0,
  warningReason: '',
  reputation: 0,
  vip: false,
  lastSegmentID: '',
});

export const categoryColors = writable([
  {
    id: 'sponsor',
    color: '#00d400',
  },
  {
    id: 'intro',
    color: '#00ffff',
  },
  {
    id: 'outro',
    color: '#0202ed',
  },
  {
    id: 'interaction',
    color: '#cc00ff',
  },
  {
    id: 'selfpromo',
    color: '#ffff00',
  },
  {
    id: 'music_offtopic',
    color: '#ff9900',
  },
  {
    id: 'preview',
    color: '#0b9d65',
  },
  {
    id: 'poi_highlight',
    color: '#ff1684',
  },
  {
    id: 'filler',
    color: '#7300ff',
  }
]);
