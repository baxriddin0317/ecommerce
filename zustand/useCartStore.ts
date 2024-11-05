import { ProductT } from '@/lib/types';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface BasketState {
  cartProducts: ProductT[];
  cartProduct: ProductT | null;
  load: boolean;
  addToBasket: (product: ProductT) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  getItemQuantity: (id: string) => number;  
  getTotalQuantity: () => number;
  getTotalPrice: () => number; 
}

const useCartProductStore = create<BasketState>()(
  persist(
    (set, get) => ({
      cartProducts: [],
      cartProduct: null,
      load: false, 
      
      addToBasket: (product) => {
        set((state) => {
          const existingItem = state.cartProducts.find((item) => item.id === product.id);
          
          if (existingItem) {
            return {
              cartProducts: state.cartProducts.map((item) =>
                item.id === product.id ? { ...item, quantity: product.quantity } : item
              ),
            };
          } else {
            return { cartProducts: [...state.cartProducts, { ...product, quantity: product.quantity }] };
          }
        });
      },
      
      incrementQuantity: (id) => {
        set((state) => ({
          cartProducts: state.cartProducts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },
      
      decrementQuantity: (id) => {
        // set((state) => ({
        //   cartProducts: state.cartProducts.map((item) =>
        //     item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        //   ),
          
        // }));
        set((state) => {
          const item = state.cartProducts.find((item) => item.id === id);
          if (!item) return state;

          // If quantity is 1, remove the item from the basket
          if (item.quantity === 1) {
            return { cartProducts: state.cartProducts.filter((item) => item.id !== id) };
          }

          // Otherwise, decrease the quantity
          const newBasket = state.cartProducts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
          return { cartProducts: newBasket };
        });
      },
      
      getItemQuantity: (id) => {
        const item = get().cartProducts.find((item) => item.id === id);
        return item ? item.quantity : 1;
      },

      getTotalQuantity: () => {
        return get().cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      },
    }),
    {
      name: 'basket-storage', 
    }
  )
);
export default useCartProductStore;