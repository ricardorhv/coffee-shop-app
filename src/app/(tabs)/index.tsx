import { FilterItem } from "@/app/components/home/filter-item";
import { Header } from "@/app/components/home/header";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1">
      <Header />

      <View className="mt-4 mx-6">
        <View className="flex-row gap-2">
          <FilterItem id="1" label="Todos" isActive />
          <FilterItem id="1" label="Capuccino" />
        </View>

        <Text className="text-2xl">Produtos</Text>
      </View>
    </View>
  )
}