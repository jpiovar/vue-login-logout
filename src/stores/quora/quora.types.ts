import { UserData } from './../user/user.types';

export type Answer = {
    author: UserData;
    text: string;
};

export interface QuoraItem {
    author: UserData;
    text: string;
    answers: object;
}

export type QuoraStatus = 'initial'|'loading'|'loaded';

export interface QuoraStore {
    quoraItems: QuoraItem[];
    quoraStatus: QuoraStatus;
}
