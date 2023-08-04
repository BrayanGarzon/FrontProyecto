import { User } from "./user.interface";

export interface Comment {
    name: string;
    site: number;
    user?: User;
    quality?: number; // Cambiar el tipo de string a number
    created_at?: string;
    expanded?: boolean;
}
