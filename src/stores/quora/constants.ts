import { QuoraItem, QuoraStatus } from './quora.types';

export const QUORA_ITEM_INITIAL: QuoraItem = {
  id: '',
  authorId: '',
  text: '',
  answers: [],
};

export const QUORA_ITEMS_INITIAL: QuoraItem[] = [];

export const QUORA_STATUS_INITIAL: QuoraStatus = 'initial';
export const QUORA_STATUS_LOADING: QuoraStatus = 'loading';
export const QUORA_STATUS_LOADED: QuoraStatus = 'loaded';
