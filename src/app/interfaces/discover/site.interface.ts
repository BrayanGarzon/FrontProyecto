import { Category } from "./category.interface";

export interface Site {
    id:       number;
    name:     string;
    url:      string;
    location: string;
    quality:  number;
    category: Category;
    image:    string;
    price:    number;
    
}
