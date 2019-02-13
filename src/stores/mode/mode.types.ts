export type AppMode = 'initial'|'read'|'edit'|'incomplete';

export interface Reference {
    id: string;
    text: string;
}

export interface ModeStore {
    reference: Reference;
    status: AppMode;
}
