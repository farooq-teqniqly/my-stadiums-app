import { createContext, useState } from "react";
import Categories from "../data/Categories";

export const CategoriesContext = createContext({
  categories: [],
  currentCategory: null,
  setCurrentCategory: (category) => {},
});

function CategoriesContextProvider({ children }) {
  const [categories, setCategories] = useState(Categories);
  const [category, setCategory] = useState(null);

  function setCurrentCategory(newCategory) {
    setCategory(newCategory);
  }

  const value = {
    categories: categories,
    currentCategory: category,
    setCurrentCategory: setCurrentCategory,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContextProvider;
