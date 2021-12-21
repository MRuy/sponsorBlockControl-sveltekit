import { get } from 'svelte/store';
import { Config } from './stores/config';
import { UserInfo } from './stores/userInfo';

export const minutesReadable = (minutes: number, useLong = false): string => {
  const years = Math.floor(minutes / 60 / 24 / 365);
  const days = Math.floor(minutes / 60 / 24) % 365;
  const hours = Math.floor(minutes / 60) % 24;
  let str = '';
  str += `${years > 0 ? years + (useLong ? ' years ' : 'y ') : ''}`;
  str += `${days > 0 ? days + (useLong ? ' days ' : 'd ') : ''}`;
  str += `${hours > 0 ? hours + (useLong ? ' hours ' : 'h ') : ''}`;
  if (years == 0) {
    str += `${(minutes % 60).toFixed(1)}${useLong ? ' minutes ' : 'm '}`;
  }
  return str.trim();
};

export const isValidUserUUID = (str: string): boolean => {
  return /^[a-f0-9]{64}$/.test(str);
};

export const isValidSegmentUUID = (str: string): boolean => {
  return /^([a-f0-9]{64,65}|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/.test(
    str
  );
};

export const updateUserInfo = async (force = false): Promise<any> => {
  console.log('updateUserInfo', 'updating data');
  const CACHE_TIME = 600000;
  const userInfo = get(UserInfo);
  const config = get(Config);
  if (force === true || ('_lastUpdateTime' in userInfo &&
    userInfo._lastUpdateTime + CACHE_TIME < Date.now())) {
    const result = await fetch(
      `${config.sponsorBlockApi}/api/getUserInfo?userID=${config.privateUUID}`
    ).then((response) => {
      return response.json();
    });
    userInfo._lastUpdateTime = Date.now();
    UserInfo.update(store => ({...store, ...{
      minutesSaved: result.minutesSaved,
      viewCount: result.viewCount,
      vip: result.vip,
      segmentCount: result.segmentCount,
      warnings: result.warnings,
      userName: result.userName,
      userID: result.userID,
    }}));
  }
  else {
    console.log('updateUserInfo', 'using data from cache', userInfo._lastUpdateTime);
  }
};
