export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    fake_name?: string;
    avatar?: string;
    phone?: string;
    nationality?: string;
    gender?: string;
}