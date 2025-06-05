'use client';

import { SectionContent } from '@/components/layouts';
import {
  ProductCard,
  ProductCartItem,
} from '@/components/molecules/product-card';
import { Button, Flex, Text } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import productImage from '@/assets/images/product_example.png'; // Assuming you have a product image

interface Category {
  title: string;
  value: string;
}

const category: Category[] = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Hygiene',
    value: 'hygiene',
  },
  {
    title: 'Herbal',
    value: 'herbal',
  },
  {
    title: 'Feeding set',
    value: 'feeding-set',
  },
  {
    title: 'Collar',
    value: 'collar',
  },
];

const productData: ProductCartItem[] = [
  {
    id: '1',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['500ml', '1L', '2L'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '2',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['500ml', '1L'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '3',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['500ml', '1L'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '4',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['500ml', '1L'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '5',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['500ml', '1L'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '6',
    image: productImage,
    productName: 'Dog Dog',
    productOptions: ['500ml', '1L'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '7',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['50g', '20g'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '8',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['30g', '90g'],
    productCategory: 'Refill roll',
    price: 15,
  },
  {
    id: '9',
    image: productImage,
    productName: 'Dog Shampoo',
    productOptions: ['100ml', '1L'],
    productCategory: 'Refill roll',
    price: 15,
  },
];

export const AllProduct = () => {
  const [currentCategory, setCurrentCategory] = useState<string>(
    category[0].value,
  );
  return (
    <SectionContent className="py-24 flex-col">
      <Text variant="subtitle" className="mb-6 px-6 md:px-0">
        Essential Care for Every Paw
      </Text>
      <Flex className="gap-4 mb-18 flex-col md:flex-row">
        {category.map((item) => (
          <Button
            key={item.value}
            variant="outline"
            className={cn(
              'rounded-full px-6 py-3 border-lightsilver',
              currentCategory === item.value
                ? 'bg-eerieblack text-white hover:bg-eerieblack/90'
                : 'bg-transparent',
            )}
            onClick={() => setCurrentCategory(item.value)}
          >
            <Text
              className={cn(
                currentCategory === item.value
                  ? 'text-white'
                  : 'text-eerieblack',
              )}
            >
              {item.title}
            </Text>
          </Button>
        ))}
      </Flex>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16 px-6 md:px-0">
        {productData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </SectionContent>
  );
};
