"use client";

import { Category } from "@/utils/types";
import { FC, ReactNode, createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const DataContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <DataContext.Provider value={{ categories, setCategories }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
