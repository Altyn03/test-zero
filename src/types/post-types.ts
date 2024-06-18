export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IUserFromPost {
    username: string;
    [key: string]: string | object;
}
