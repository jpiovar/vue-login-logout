import { QuoraItem, QuoraStatus } from './quora.types';

export const QUORA_ITEM: QuoraItem = {
  id: '',
  authorId: '',
  text: '',
  answers: [],
};

export const QUORA_STATUS_INITIAL: QuoraStatus = 'initial';
export const QUORA_STATUS_LOADING: QuoraStatus = 'loading';
export const QUORA_STATUS_DONE: QuoraStatus = 'done';
