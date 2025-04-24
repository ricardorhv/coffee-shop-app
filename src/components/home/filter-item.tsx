import { useState } from "react";
import { Pressable, Text } from "react-native";

interface FilterItemProps {
  id: string;
  label: string;
  isActive?: boolean;
}

export function FilterItem({ id, label, isActive }: FilterItemProps) {
  const [isSelected, setIsSelected] = useState(isActive ?? false)

  function handleChangeIsSelected() {
    setIsSelected((prevState) => !prevState)
  }
  
  return (
    <Pressable onPress={handleChangeIsSelected} className={`px-3 py-1 ${isSelected ? 'bg-product-primary' : 'bg-gray-300'} rounded-md mr-3 item`}>
      <Text className={`${isSelected ? 'text-white' : 'text-gray-700'} text-sm font-sora-semibold leading-normal`}>{label}</Text>
    </Pressable>
  )
}