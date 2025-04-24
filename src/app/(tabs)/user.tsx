import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function User() {
  return (
    <SafeAreaView className="mt-12 gap-6">
      <View className="items-center gap-4">
        <Image className="w-[200px] h-[200px] rounded-full border-2 border-product-primary" source={{ uri: 'https://avatars.githubusercontent.com/u/56226862?v=4' }} />

        <View className="items-center">
          <Text className="font-sora-semibold text-lg text-gray-700">Ricardo Vinciguerra</Text>
          <Text className="font-sora-regular text-sm text-gray-400">Engenharia de Software</Text>
          <Text className="font-sora-regular text-xs text-gray-400">5° Período</Text>
        </View>
      </View>

      <View className="mx-6">
        <Text className="font-sora-regular text-sm leading-tight text-justify text-gray-500">
          Sou uma pessoa extremamente dedicada e comprometida com as tarefas que me são confiadas, sempre buscando executá-las com excelência e atenção aos detalhes. Minha paixão por organização reflete-se tanto na minha vida pessoal quanto no meu trabalho, especialmente na programação, onde priorizo o uso de boas práticas e a criação de estruturas de pastas claras e eficientes. Desde 2019, quando ingressei no IFPR, venho me aprofundando no estudo de programação, desenvolvendo habilidades técnicas sólidas e um amor contínuo por aprender.
        </Text>
      </View>

      <View className="mx-6 mt-4 justify-center gap-8 flex-row">
        <View className="flex-row gap-2 items-center">
          <FontAwesome6 color="#C67C4E" name="city" size={20} />
          <Text className="font-sora-regular text-sm text-gray-600">Assis Chateaubriand</Text>
        </View>

        <View className="flex-row gap-2 items-center">
          <FontAwesome6 color="#C67C4E" name="github" size={20} />
          <Link href="https://github.com/ricardorhv" className="font-sora-regular text-sm text-gray-600">@ricardorhv</Link>
        </View>
      </View>
    </SafeAreaView>
  )
}