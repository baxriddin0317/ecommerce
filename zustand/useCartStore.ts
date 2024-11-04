import { fireDB } from '@/firebase/FirebaseConfig';
import { ProductT } from '@/lib/types';
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import {create} from 'zustand';

interface ProductStore {
  cartProducts: ProductT[];
  cartProduct: ProductT | null;
  load: boolean;
  addCartProduct: (newCartProduct: ProductT) => void
  fetchCartProducts: () => void;
  fetchSingleCartProduct: (id: string) => Promise<void>;
  // updateProduct: (id: string, updatedProduct: ProductT) => Promise<void>;
  // deleteProduct: (productId: string) => Promise<void>;
}

const useCartProductStore = create<ProductStore>((set) => ({
  cartProducts: [],
  cartProduct: null,
  load: false,

  // add cart product
  addCartProduct: async (newCartProduct) => {
    set({ load: true });
    try {
      const categoryDoc = doc(collection(fireDB, 'cartProdcts'));
      await setDoc(categoryDoc, newCartProduct);
      set({ load: false });
    } catch (error) {
      console.error('Error add cart product:', error);
      set({ load: false });
    }
  },

  // Fetch all products
  fetchCartProducts: async () => {
    set({ load: true });
    try {
      const q = query(collection(fireDB, "cartProdcts"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let productArray: any = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        set({ cartProducts: productArray, load: false });
      });
      return () => unsubscribe(); 
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ load: false });
    }
  },

  // Fetch a single product by ID
  fetchSingleCartProduct: async (id: string) => {
    set({ load: true });
    try {
      const productDoc = await getDoc(doc(fireDB, 'cartProdcts', id));
      const productData = productDoc.data();
      
      if (productData) {
        set({
          cartProduct: {
            id, 
            title: productData.title,
            price: productData.price,
            productImageUrl: productData.productImageUrl,
            category: productData.category,
            description: productData.description,
            quantity: productData.quantity,
            time: productData.time,
            date: productData.date,
          } as ProductT,
          load: false
        });
      } else {
        set({ load: false });
        console.error('Product not found');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      set({ load: false });
    }
  },

  // Update a product
  // updateProduct: async (id: string, updatedProduct: ProductT) => {
  //   set({ load: true });
  //   try {
  //     await setDoc(doc(fireDB, 'products', id), updatedProduct);
  //     set({ product: updatedProduct, load: false });
  //   } catch (error) {
  //     console.error('Error updating product:', error);
  //     set({ load: false });
  //   }
  // },

  // Delete a product
  // deleteProduct: async (productId) => {
  //   try {
  //     const productRef = doc(fireDB, 'products', productId);
  //     await deleteDoc(productRef);
  //     set((state) => ({
  //       products: state.products.filter(product => product.id !== productId)
  //     }));
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //   }
  // }
}));

export default useCartProductStore;