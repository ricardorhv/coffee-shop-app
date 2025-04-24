import { getAllCoffees } from "@/services/coffee";
import { FlatList, SafeAreaView } from "react-native";
import { CoffeeCard } from "./coffee-card";

export function Catalog() {
  const coffees = getAllCoffees()

  return (
    <SafeAreaView className="my-6">
      <FlatList
        data={coffees}
        numColumns={2}
        renderItem={
          ({ item }) => 
            <CoffeeCard 
              id={item.id}
              name={item.name}
              categoryId={item.categoryId}
              image={item.image}
              price={item.price}
            />
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}