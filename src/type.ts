export interface Painting {
  id: number;
  titel: string;
  description: string;
  imgsSrc: string[];
  prevPrice: number;
  price: number;
  isAvailable: boolean;
}
