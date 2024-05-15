import { atom } from 'recoil';

export const BestState = atom({
  key: 'BestState',
  default: [{ id: -1, title: '', type: '' }],
});
