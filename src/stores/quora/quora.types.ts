import { UserData } from './../user/user.types';

export type Answer = {
    id: string;
    author: UserData;
    text: string;
};

export interface QuoraItem extends Answer {
    answers: Answer[];
}

export type QuoraStatus = 'initial'|'loading'|'loaded';

export interface QuoraStore {
    quoraItems: QuoraItem[];
    quoraStatus: QuoraStatus;
}
