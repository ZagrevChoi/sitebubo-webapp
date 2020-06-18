export enum ToastType {
    Success = 'SUCCESS',
    Warning = 'WARNING',
    Danger = 'DANGER'
}

export interface Toast {
    type: ToastType;
    title?: string;
    text: string;
}