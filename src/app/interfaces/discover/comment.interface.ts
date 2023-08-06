import { Site } from "./site.interface";
import { User } from "./user.interface";

export interface Comment {
    id?: number;
    name: string;
    site: Site;
    user?: User;
    quality?: number; // Cambiar el tipo de string a number
    created_at?: string;
    expanded?: boolean;
    showDivFlotante?: boolean; // El '?' indica que la propiedad es opcional
    commentCount?: number; // Agrega la propiedad para el contador de comentarios
    siteCount?: number;
}
