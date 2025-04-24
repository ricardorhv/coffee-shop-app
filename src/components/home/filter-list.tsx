import { getAllCategories } from "@/services/category";
import { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { FilterItem } from "./filter-item";

interface FilterListProps {
  handleFilterCoffeeByCategory: (categoryIds: string[]) => void;
}

export function FilterList({ handleFilterCoffeeByCategory }: FilterListProps) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);

  const categories = getAllCategories();
  const defaultFilter = {
    id: "1",
    name: "Todos",
  };

  function handleSelectCategory(categoryId: string) {
    if (categoryId === defaultFilter.id) {
      setSelectedCategoryIds([]);
      handleFilterCoffeeByCategory([]);
    } else {
      setSelectedCategoryIds((prevState) => {
        if (!prevState.includes(categoryId)) {
          const newSelection = [...prevState, categoryId];
          handleFilterCoffeeByCategory(newSelection);
          return newSelection;
        }
        return prevState;
      });
    }
  }

  function handleUnselectCategory(categoryId: string) {
    setSelectedCategoryIds((prevState) => {
      const newSelection = prevState.filter((id) => id !== categoryId);
      handleFilterCoffeeByCategory(newSelection);
      return newSelection;
    });
  }

  return (
    <SafeAreaView>
      <FlatList
        data={[defaultFilter, ...categories]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FilterItem
            id={item.id}
            label={item.name}
            isSelected={
              item.id === defaultFilter.id
                ? selectedCategoryIds.length === 0
                : selectedCategoryIds.includes(item.id)
            }
            onSelectFilterItem={handleSelectCategory}
            onUnselectFilterItem={handleUnselectCategory}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </SafeAreaView>
  );
}