export interface ProductT {
  id: string;
  title: string;
  price: number;
  productImageUrl: ImageT[];
  category: string;
  description: string;
  quantity: number;
  time: any; // Adjust based on your timestamp type
  date: any; // Adjust based on your date type
  storageFileId: string;
}

export interface CategoryI {
  id: string;
  name: string;
  categoryImgUrl: string[];
}

export interface ImageT {
  url: string;
  path: string;
}