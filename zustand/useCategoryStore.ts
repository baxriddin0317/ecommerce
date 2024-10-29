import { fireDB } from '@/firebase/FirebaseConfig';
import { CategoryI } from '@/lib/types';
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import {create} from 'zustand';

interface CategoryStoreI {
  categories: CategoryI[];
  category: CategoryI | null;
  loading: boolean;
  addCategory: (newCategory: CategoryI) => Promise<void>;
  fetchCategories: () => void;
  deleteCategory: (categoryId: string) => void;
}

const useCategoryStore = create<CategoryStoreI>((set) => ({
  categories: [],
  category: null,
  loading: false,
  // Add a new category
  addCategory: async (newCategory: CategoryI) => {
    set({ loading: true });
    try {
      const categoryDoc = doc(collection(fireDB, 'categories'));
      await setDoc(categoryDoc, newCategory);
      set({ loading: false });
    } catch (error) {
      console.error('Error adding category:', error);
      set({ loading: false });
    }
  },

  // Fetch all categories
  fetchCategories: async () => {
    set({ loading: true });
    try {
      const q = query(collection(fireDB, "categories"));
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let CategoryArray: any = [];
        QuerySnapshot.forEach((doc) => {
          CategoryArray.push({ ...doc.data(), id: doc.id });
        });
        set({ categories: CategoryArray, loading: false });
      });
      return () => unsubscribe(); 
    } catch (error) {
      console.error('Error fetching categories:', error);
      set({ loading: false });
    }
  },

  // delete category with id
  deleteCategory: async (categoryId) => {
    try {
      const categoryRef = doc(fireDB, 'categories', categoryId);
      await deleteDoc(categoryRef);
      set((state) => ({
        categories: state.categories.filter(category => category.id !== categoryId)
      }));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  }
}))

export default useCategoryStore;