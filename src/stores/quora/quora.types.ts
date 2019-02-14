import { UserData } from './../user/user.types';

export type AnswerItem = {
    id: string;
    author: UserData;
    text: string;
};

export interface QuoraItem extends AnswerItem {
    answers: AnswerItem[];
}

export type QuoraStatus = 'initial'|'loading'|'loaded';

export interface QuoraStore {
    quoraItems: QuoraItem[];
    quoraStatus: QuoraStatus;
}
