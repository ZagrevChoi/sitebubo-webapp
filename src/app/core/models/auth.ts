export interface User {
    id: number,
    avatar?: string,
    verified: boolean,
    new_user: boolean,
    name: string,
    email: string,
    terms: boolean
}

export interface LoginResponse {
    token: string;
}
