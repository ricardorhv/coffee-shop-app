import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, View } from "react-native";

export function Header() {
  return (
    <LinearGradient 
        colors={['#111111', '#313131']}
        start={{ x: 1, y: 0.2 }}
        end={{ x: 0.4, y: 1.2 }}
        locations={[0.3, 0.9]}
      >
        <View className="items-center justify-center h-[200px] relative flex-row px-6">
          <FontAwesome
            className="absolute z-20 top-1/2 -translate-y-1/2 left-11" 
            name="search" 
            color="#FFF"
            size={20} 
          />
          <TextInput 
            className="p-5 pl-14 placeholder::text-gray-400 border border-gray-700 bg-gray-700 flex-1 rounded-xl text-white focus:border-white" 
            placeholder="Pesquise por um café" 
          />
        </View>
      </LinearGradient>
  )
}