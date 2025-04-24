import { getCategoryById } from "@/services/category";
import { getCoffeeById } from "@/services/coffee";
import { useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function CoffeeDetails() {
  const { id } = useLocalSearchParams()
  const coffee = getCoffeeById(id as string)

  if (!coffee) {
    return (
      <SafeAreaView className="items-center justify-center flex-1">
        <Text className="font-sora-semibold text-2xl text-gray-700">Café não encontrado!</Text>
      </SafeAreaView>
    )
  }

  const coffeeCategory = getCategoryById(coffee.categoryId)

  return (
    <SafeAreaView className="mt-6 flex-1 mx-6 gap-4">
      <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent />
      
      <Image className="w-full h-[205px] object-cover rounded-2xl" source={{ uri: coffee.image }} />

      <View className="gap-1">
        <Text className="font-sora-semibold text-xl leading-normal text-[#242424]">{coffee.name}</Text>
        {coffeeCategory && <Text className="font-sora-regular text-xs leading-tight text-gray-400">{coffeeCategory.name}</Text>}
      </View>

      <View className="w-full h-[1px] bg-gray-300"></View>

      <View className="gap-1">
        <Text className="font-sora-semibold text-base leading-normal text-[#242424]">Descrição</Text>
        <Text className="font-sora-regular text-base leading-normal text-gray-400">
          {coffee.description}
        </Text>
      </View>

      <View className="gap-1 mt-4">
        <Text className="font-sora-regular text-sm leading-tight text-[#909090]">Preço</Text>
        <Text className="font-sora-semibold text-lg leading-normal text-product-primary">
          {coffee.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
      </View>
    </SafeAreaView>
  )
}