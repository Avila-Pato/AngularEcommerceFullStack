// #Interfaz que representara el producto
export interface Product {
    id: string;
    name: string;
    description: string;
    urlImage: string;
    reviews: number;
    price: number;
    previusPrice: number | null;
    imagePosition:  { top: string; right: string; width: string; scale?: string } | null;
    
}
