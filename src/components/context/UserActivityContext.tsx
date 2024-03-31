"use client";

import { ReactNode, createContext, useState } from "react";
import { Product } from "@/utils/types";

export const UserActivityContext = createContext<UserActivityContextType>({
  total: 1,
  setTotal: () => {},
  cartItems: [],
  setCartItems: () => {},
  favorites: [],
  setFavorites: () => {},
  searchValue: "",
  setSearchValue: () => {},
  category: false,
  setCategory: () => {},
});
type UserActivityContextType = {
  total: number;
  setTotal: (num: (prev: number) => number) => void;
  cartItems: Product[];
  setCartItems: (arr: (prev: Product[]) => Product[]) => void;
  favorites: Product[];
  setFavorites: (arr: (prev: Product[]) => Product[]) => void;
  category: boolean;
  setCategory: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: (e: string) => void;
};
type Props = {
  children: ReactNode;
};
export const UserActivityProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(false);
  const [total, setTotal] = useState(0);

  return (
    <UserActivityContext.Provider
      value={{
        total,
        setTotal,
        cartItems,
        setCartItems,
        favorites,
        setFavorites,
        searchValue,
        setSearchValue,
        category,
        setCategory,
      }}
    >
      {children}
    </UserActivityContext.Provider>
  );
};
