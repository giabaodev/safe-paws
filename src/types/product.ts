import { StaticImageData } from 'next/image';

export interface ProductCartItem {
  id: string;
  image?: string | StaticImageData;
  productName: string;
  productOptions: string[];
  productCategory: string;
  price: string | number;
}
