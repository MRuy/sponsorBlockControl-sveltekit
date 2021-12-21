import { writable } from 'svelte/store';

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
