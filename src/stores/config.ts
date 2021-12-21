import { writable } from 'svelte-local-storage-store';

export const Config = writable('config', {
  privateUUID: '',
  sponsorBlockApi: 'https://sponsor.ajay.app',
  showPrivateUUID: false,
});
