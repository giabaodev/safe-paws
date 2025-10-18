import { ProductCartItem } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Flex, Text } from '../ui';
import { useCartStore } from '@/stores';

interface ProductCardProps {
  item: ProductCartItem;
}

export function ProductCard({ item }: ProductCardProps) {
  const { addItem, setOpen } = useCartStore();
  const { image, productName, productCategory, productOptions, price } = item;
  const [currentOption, setCurrentOption] = useState<string>(productOptions[0]);

  const handleAddToCart = () => {
    addItem({
      ...item,
      selectedOption: currentOption,
      quantity: 1,
    });
    return setOpen(true);
  };

  return (
    <Flex className="flex-col gap-3">
      <Image
        alt="Product Image"
        src={image || ''}
        style={{
          flexShrink: 0,
        }}
        width={250}
        height={250}
      />
      <div>
        <Text variant="bodysmall">{productName}</Text>
        <Text variant="bodystrong">{productCategory}</Text>
      </div>
      <Flex className="flex-col md:flex-row gap-1 md:gap-0 md:h-[92px] flex-1">
        <Text variant="bodysmall" className="md:flex-1 text-sonic-silver">
          Option
        </Text>
        <Flex className="flex-2 gap-1 md:gap-3 grid grid-cols-2 h-fit">
          {productOptions.map((option) => (
            <Button
              key={option}
              className="rounded-full font-light text-base border-lightsilver h-8 px-3 py-1"
              variant={currentOption === option ? 'default' : 'outline'}
              onClick={() => setCurrentOption(option)}
            >
              {option}
            </Button>
          ))}
        </Flex>
      </Flex>
      <Flex>
        <Text variant="bodysmall" className="flex-1 text-sonic-silver">
          Price
        </Text>
        <span className="inline-flex flex-2">
          <Text className="font-medium text-sm">$</Text>
          <Text className="font-medium text-xl">{price}</Text>
        </span>
      </Flex>
      <div className="text-center">
        <Button
          className="rounded-full block mx-auto bg-deepgreen hover:bg-deepgreen/80"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button variant="link" className="text-sm font-light text-sonic-silver">
          Show details
        </Button>
      </div>
    </Flex>
  );
}
