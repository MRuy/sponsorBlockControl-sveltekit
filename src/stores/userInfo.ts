import { writable } from 'svelte-local-storage-store';

export const UserInfoDefaults = {
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
};

export const UserInfo = writable('userinfo', {...UserInfoDefaults});
