export interface Auth {

}

export interface User {
    user_id: number;
    email: string;
    fullname: string;
    avatar?: string;
    isEmailVerified?: boolean
}

export interface LoginResponse {
    token: string;
}
