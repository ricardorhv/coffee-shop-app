import { data } from '@/data';
import { Category } from '@/interfaces/category';

export const getAllCategories = (): Category[] => {
  return data.categories;
};

export const getCategoryById = (id: string): Category | undefined => {
  return data.categories.find((item) => item.id === id);
};