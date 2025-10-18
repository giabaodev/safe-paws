import { ProductCartItem } from '@/types';
import { create } from 'zustand';

export type CartItem = ProductCartItem & {
  selectedOption: string;
  quantity: number;
};

type UpdateItem = {
  id: string;
  selectedOption: string;
  newOption: string;
  quantity: number;
};

type CartState = {
  open: boolean;
  setOpen: (value: boolean) => void;
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateItem: ({ id, selectedOption, newOption, quantity }: UpdateItem) => void;
  removeItem: (id: string, selectedOption: string) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
  items: [],
  addItem: (item) => {
    const items = get().items;
    const existing = items.find(
      (i) => i.id === item.id && i.selectedOption === item.selectedOption,
    );
    if (existing) {
      set({
        items: items
          .map((i) => {
            if (i.id === item.id && i.selectedOption === item.selectedOption) {
              return { ...i, quantity: i.quantity + item.quantity };
            }
            return i;
          })
          .filter((i) => i.quantity > 0),
      });
    } else {
      set({ items: [...items, item] });
    }
  },
  updateItem: ({ id, selectedOption, newOption, quantity }) => {
    const items = get().items;
    const findExisted = items.find(
      (i) => i.id === id && i.selectedOption === newOption,
    );
    if (findExisted) {
      // If the new option already exists, just increase the quantity of that item
      set({
        items: items
          .map((i) => {
            if (i.id === id && i.selectedOption === newOption) {
              return { ...i, quantity: i.quantity + quantity };
            }
            // Remove the old item with the selectedOption
            if (i.id === id && i.selectedOption === selectedOption) {
              return null;
            }
            return i;
          })
          .filter((i): i is CartItem => i !== null), // Filter out null values
      });
    } else {
      // If the new option does not exist, update the selectedOption of the existing item
      set({
        items: items.map((i) => {
          if (i.id === id && i.selectedOption === selectedOption) {
            return { ...i, selectedOption: newOption };
          }
          return i;
        }),
      });
    }
  },
  removeItem: (id, selectedOption) => {
    set({
      items: get().items.filter(
        (i) => !(i.id === id && i.selectedOption === selectedOption),
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  total: () =>
    get().items.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0,
    ),
}));
