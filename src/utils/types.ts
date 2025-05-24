export type Product = {
  id: number;
  title: string;
  category: string;
  seller: string;
  vip: boolean;
  description: string;
  image: string;
  price: number;
};

export type UserProduct = {
  id: number;
  user_id: string;
  product_id: number;
  quantity?: number;
};
