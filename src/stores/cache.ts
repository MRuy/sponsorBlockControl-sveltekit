import { writable } from 'svelte-local-storage-store';

export const Cache = writable('cache', {
  totalstats: {
    apiUsers: 0,
    userCount: 0,
    viewCount: 0,
    totalSubmissions: 0,
    minutesSaved: 0,
  },
  totalstats_time: 0,
});
