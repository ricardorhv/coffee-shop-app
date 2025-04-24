import { data } from '@/data';
import { Coffee } from '@/interfaces/coffee';

export const getAllCoffees = (): Coffee[] => {
  return data.coffees;
};

export const getCoffeeById = (id: string): Coffee | undefined => {
  return data.coffees.find((item) => item.id === id);
};

export const getCoffeesByCategory = (categoryId: string): Coffee[] => {
  return data.coffees.filter((item) => item.categoryId === categoryId);
};

export const getCoffeesByName = (name: string): Coffee[] => {
  return data.coffees.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
};