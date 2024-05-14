import { atom } from 'recoil';

export const dateState = atom<string[]>({
  key: 'dateState',
  default: [],
});
