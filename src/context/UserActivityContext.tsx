"use client";

import { ReactNode, createContext, useState } from "react";
import { Product } from "@/utils/types";

export const UserActivityContext = createContext<UserActivityContextType>({
  total: 1,
  setTotal: () => {},
  cartItems: [],
  setCartItems: () => {},
  itemCount: [],
  setItemCount: () => {},
  favorites: [],
  setFavorites: () => {},
  lastSearch: [],
  setLastSearch: () => {},
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
  itemCount: Product[];
  setItemCount: (arr: (prev: Product[]) => Product[]) => void;
  favorites: Product[];
  setFavorites: (arr: (prev: Product[]) => Product[]) => void;
  lastSearch: String[];
  setLastSearch: (arr: (prev: String[]) => String[]) => void;
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
  const [itemCount, setItemCount] = useState(cartItems);
  const [lastSearch, setLastSearch] = useState<String[]>([]);

  return (
    <UserActivityContext.Provider
      value={{
        total,
        setTotal,
        cartItems,
        setCartItems,
        itemCount,
        setItemCount,
        favorites,
        setFavorites,
        searchValue,
        setSearchValue,
        category,
        setCategory,
        lastSearch,
        setLastSearch,
      }}
    >
      {children}
    </UserActivityContext.Provider>
  );
};
