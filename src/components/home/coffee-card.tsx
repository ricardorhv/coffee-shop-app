import { Coffee } from "@/interfaces/coffee";
import { getCategoryById } from "@/services/category";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

type CoffeeCardProps = Omit<Coffee, 'description'> 

export function CoffeeCard({ id, name, categoryId, image, price }: CoffeeCardProps) {
  const categoryName = getCategoryById(categoryId)

  return (
    <Link className="flex-1 mb-8 mx-4" href={`/coffee/${id}`}>
      <View className="w-full gap-2">
        <View>
          <Image
            className="w-full h-[128px] object-cover rounded-xl"
            source={{ uri: image }} 
          />
        </View>

        <View>
          <Text className="font-sora-semibold text-base leading-normal text-gray-[#242424]">
            {name}
          </Text>
          {categoryName && (
            <Text className="font-sora-regular text-xs leading-tight text-gray-400">
              {categoryName.name}
            </Text>
          )}
        </View>

        <Text className="font-sora-bold text-lg leading-normal text-[#050505]">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Text>
      </View>
    </Link>
  )
}