import { CartItem, useCartStore } from '@/stores';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DeleteIcon, RemoveIcon } from '../icons';
import { AddIcon } from '../icons/add';
import { Button, Flex, Text } from '../ui';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const ProductInCart = ({ item }: { item: CartItem }) => {
  const { addItem, updateItem, removeItem } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleRemoveItem = () => removeItem(item.id, item.selectedOption);

  const handleChangeOption = (value: string) => {
    if (value === item.selectedOption) return;
    return updateItem({
      id: item.id,
      selectedOption: item.selectedOption,
      newOption: value,
      quantity: item.quantity,
    });
  };

  const handleChangeQuantity = (value: number) => {
    return addItem({
      ...item,
      selectedOption: item.selectedOption,
      quantity: value,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') return;
    // Allow only digits
    if (/^\d*$/.test(value)) {
      // Block "0" as the first number and block empty leading zeros
      if (value === '' || (Number(value) > 0 && !/^0\d+/.test(value))) {
        updateItem({
          id: item.id,
          selectedOption: item.selectedOption,
          newOption: item.selectedOption,
          quantity: Number(value),
        });
        setInputValue(value);
      }
    }
  };

  useEffect(() => {
    setInputValue(item.quantity.toString());
  }, [item.quantity]);

  return (
    <Flex className="gap-4">
      <Image
        src={item.image || ''}
        alt={`${item.id}-image`}
        style={{
          flexShrink: 0,
          objectFit: 'cover',
          width: '72px',
          height: '72px',
        }}
      />
      <Flex className="flex-col flex-1">
        <Flex className="gap-4 items-center mb-1 justify-between">
          <div>
            <Text variant="description-base">{item.productName}</Text>
            <Text variant="bodysmall" className="font-medium">
              {item.productCategory}
            </Text>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={handleRemoveItem}
          >
            <DeleteIcon
              style={{
                width: '24px',
                height: '24px',
              }}
            />
          </Button>
        </Flex>
        <Select value={item.selectedOption} onValueChange={handleChangeOption}>
          <SelectTrigger className="rounded-full shadow-none border-lightsilver md:max-h-6.5">
            <SelectValue placeholder="Select product category" asChild>
              <Text variant="description-base">{item.selectedOption}</Text>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {item.productOptions.map((option) => (
              <SelectItem key={option} value={option}>
                <Text variant="description-base">{option}</Text>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Flex className="flex-col md:flex-row md:items-center md:justify-between mt-4 gap-2 md-gap-0">
          <Flex className="items-center border border-lightsilver rounded-full overflow-hidden md:max-w-36">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-none max-h-8 px-1"
              onClick={() => {
                if (item.quantity === 1) return setIsOpen(true);
                handleChangeQuantity(-1);
              }}
            >
              <RemoveIcon
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </Button>
            <Input
              type="number"
              value={inputValue}
              className="text-center text-fireopal font-medium focus-visible:ring-0 p-0 max-w-full max-h-8 border-none shadow-none"
              onChange={handleInputChange}
            />
            <Button
              size="icon"
              variant="ghost"
              className="rounded-none max-h-8 px-1"
              onClick={() => handleChangeQuantity(1)}
            >
              <AddIcon
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </Button>
          </Flex>
          <Flex className="items-center gap-1">
            <Text variant="bodysmall">$</Text>
            <Text variant="bodysmall" className="font-medium">
              {(Number(item.price) * item.quantity).toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to remove this item?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action will be remove this item to your cart.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleChangeQuantity(-1)}>
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  );
};
