export interface ProductT {
  id: string;
  title: string;
  price: number;
  productImageUrl: string;
  category: string;
  description: string;
  quantity: number;
  time: any; // Adjust based on your timestamp type
  date: any; // Adjust based on your date type
}

export interface CategoryI {
  id: string;
  name: string;
  categoryImgUrl: string;
}