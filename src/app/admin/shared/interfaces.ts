export interface User {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface FbAuthResponse {
    idToken: string;
    expiresIn: string;
}

export interface Post {
    id?: number | string;
    title: string;
    text: string;
    author: string;
    date: Date;
    name?: number
}