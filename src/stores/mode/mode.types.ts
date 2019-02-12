export type AppMode = 'initial'|'read'|'edit';

export interface Reference {
    id: string;
}

export interface ModeStore {
    reference: Reference;
    status: AppMode;
}
