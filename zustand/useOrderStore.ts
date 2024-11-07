import {create} from "zustand";
import { collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
import { fireDB } from "@/firebase/FirebaseConfig";
import { Order, ProductT } from "@/lib/types";

interface StoreState {
  orders: Order[];
  currentOrder: Order | null;
  loadingOrders: boolean;
  addOrder: (order: Order) => Promise<void>;
  // fetchAllOrders: () => Promise<void>;
  // fetchSingleOrder: (orderId: string) => Promise<void>;
}

export const useOrderStore = create<StoreState>((set) => ({
  orders: [],
  currentOrder: null,
  loadingOrders: true,

  // Add a new order to Firestore and update the state
  addOrder: async (order: Order) => {
    try {
      const ordersCollectionRef = collection(fireDB, "orders");
      const docRef = await addDoc(ordersCollectionRef, {
        ...order,
        date: new Date(),
      });
      set((state) => {
        const newOrder = { ...order, id: docRef.id };
        return { orders: [...state.orders, newOrder] };
      });
    } catch (error) {
      console.error("Error adding order to Firebase: ", error);
    }
  },

  // Fetch all orders from Firestore and update the state
  // fetchAllOrders: async () => {
  //   set({ loadingOrders: true });
  //   try {
  //     const ordersSnapshot = await getDocs(collection(fireDB, "orders"));
  //     const orders = ordersSnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     set({ orders: orders, loadingOrders: false });
  //   } catch (error) {
  //     console.error("Error fetching orders: ", error);
  //     set({ loadingOrders: false });
  //   }
  // },

  // Fetch a single order by its ID and update the state
  // fetchSingleOrder: async (orderId: string) => {
  //   try {
  //     const orderDoc = await getDoc(doc(fireDB, "orders", orderId));
  //     if (orderDoc.exists()) {
  //       set({ currentOrder: { id: orderDoc.id, ...orderDoc.data() } });
  //     } else {
  //       console.error("Order not found");
  //       set({ currentOrder: null });
  //     }
  //   } catch (error) {
  //     console.error("Error fetching order by ID: ", error);
  //   }
  // },
}));
