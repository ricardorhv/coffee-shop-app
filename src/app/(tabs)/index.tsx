import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1">
      <LinearGradient 
        colors={['#111111', '#313131']}
        start={{ x: 1, y: 0.2 }}
        end={{ x: 0.4, y: 1.2 }}
        locations={[0.3, 0.9]}
      >
        <View className="items-center justify-center h-[400px] relative">
          <FontAwesome
            className="absolute z-20 top-1/2" 
            name="search" 
            color="#FFF"
            size={20} 
          />
          <TextInput 
            className="p-5 placeholder:text-gray-400 bg-gray-700" 
            placeholder="Pesquise por um café" 
          />
        </View>
      </LinearGradient>

      <View>
        <View>
          <Text>Filtros</Text>
        </View>

        <Text>Produtos</Text>
      </View>
    </View>
  )
}