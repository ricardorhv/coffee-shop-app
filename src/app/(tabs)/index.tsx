import { Header } from "@/components/home/header";
import { SafeAreaView, View } from "react-native";
import { Catalog } from "../../components/home/catalog";
import { FilterList } from "../../components/home/filter-list";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1 mx-6">
        <FilterList />
        <Catalog />
      </View>
    </SafeAreaView>
  )
}