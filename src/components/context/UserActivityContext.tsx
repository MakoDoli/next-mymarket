"use client";

import { ReactNode, createContext, useState } from "react";
import { Product } from "@/utils/types";

export const UserActivityContext = createContext<UserActivityContextType>({
  cart: 0,
  setCart: () => {},
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
  cart: number;
  setCart: (val: number) => void;
  cartItems: Product[];
  setCartItems: (arr: Product[]) => void;
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
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(false);

  return (
    <UserActivityContext.Provider
      value={{
        cart,
        setCart,
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
