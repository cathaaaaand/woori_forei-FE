import { atom } from 'recoil';

export const detailState = atom<boolean>({
  key: 'detailState',
  default: false,
});
export const beforeCommentState = atom<string>({
  key: 'beforeCommentState',
  default: '',
});
export const commentIdState = atom<string>({
  key: 'commentIdState',
  default: '',
});
