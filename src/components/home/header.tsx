import { FontAwesome } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

interface HeaderProps {
  handleFilterCoffeeByName: (filterName: string) => void
}

//NÃO ESTÁ SENDO UTILIZADO

export function Header({ handleFilterCoffeeByName }: HeaderProps) {
  return (
    <View className="relative flex-row mx-6 mt-12 mb-8">
      <FontAwesome
        className="absolute z-20 top-1/2 -translate-y-1/2 left-5" 
        name="search" 
        color="#C67C4E"
        size={20} 
      />
      <TextInput 
        className="p-4 pl-14 text-gray-700 placeholder:text-gray-400 border border-gray-300 bg-gray-300 flex-1 rounded-xl focus:border-product-primary" 
        placeholder="Pesquise por um café"
        onChangeText={handleFilterCoffeeByName}
      />
    </View>
  )
}