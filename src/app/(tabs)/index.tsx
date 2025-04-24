import { Coffee } from "@/interfaces/coffee";
import { getAllCoffees, getCoffeesByCategory } from "@/services/coffee";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Catalog } from "../../components/home/catalog";
import { FilterList } from "../../components/home/filter-list";

export default function Home() {
  const [filteredCoffeesByCategory, setFilteredCoffeesByCategory] = useState<Coffee[]>([])
  const [isFilteringByCategory, setIsFilteringByCategory] = useState(false)

  const coffees = getAllCoffees()

  function filterByCategory(categoryIds: string[]) {
    const isCatogoryIdsEmpty = categoryIds.length === 0
    setIsFilteringByCategory(!isCatogoryIdsEmpty)

    if (!isCatogoryIdsEmpty) {
      const filteredList: Coffee[] = []

      categoryIds.forEach((categoryId) => {
        filteredList.push(...getCoffeesByCategory(categoryId))
      })

      setFilteredCoffeesByCategory(filteredList)
    } else {
      setFilteredCoffeesByCategory([])
    }
  }
  
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 mx-6 mt-12">
        <FilterList handleFilterCoffeeByCategory={filterByCategory} />
        <Catalog coffees={isFilteringByCategory ? filteredCoffeesByCategory : coffees} />
      </View>
    </SafeAreaView>
  )
}