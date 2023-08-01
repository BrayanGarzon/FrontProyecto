import { Site } from "./site.interface";

export interface Category {
    id:    number;
    name:  string;
    image: string;
}


export interface SitesCategory{
    id:    number;
    name:  string;
    image: string;
    sites: Site[]
}