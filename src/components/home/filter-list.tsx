import { getAllCategories } from "@/services/category";
import { FlatList, SafeAreaView } from "react-native";
import { FilterItem } from "./filter-item";

export function FilterList() {
  const categories = getAllCategories()
  const defaultFilter = {
    id: Math.random().toString(16),
    name: 'Todos',
    isActive: true
  }

  return (
    <SafeAreaView>
      <FlatList 
        data={[defaultFilter, ...categories]}
        showsHorizontalScrollIndicator={false}
        renderItem={
          (({ item }) => 
            <FilterItem 
              id={item.id} 
              label={item.name} 
              isActive={item.name === 'Todos'}
            />
          )
        }
        keyExtractor={item => item.id}
        horizontal
      />
    </SafeAreaView>
  )
}