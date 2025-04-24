import { Pressable, Text } from "react-native";

interface FilterItemProps {
  id: string;
  label: string;
  isSelected: boolean;
  onSelectFilterItem: (categoryId: string) => void;
  onUnselectFilterItem: (categoryId: string) => void;
}

export function FilterItem({
  id,
  label,
  isSelected,
  onSelectFilterItem,
  onUnselectFilterItem,
}: FilterItemProps) {
  function handleChangeSelection() {
    if (isSelected) {
      onUnselectFilterItem(id);
    } else {
      onSelectFilterItem(id);
    }
  }

  return (
    <Pressable
      onPress={handleChangeSelection}
      className={`px-3 py-1 ${
        isSelected ? "bg-product-primary" : "bg-gray-300"
      } rounded-md mr-3`}
    >
      <Text
        className={`${
          isSelected ? "text-white" : "text-gray-700"
        } text-sm font-sora-semibold leading-normal`}
      >
        {label}
      </Text>
    </Pressable>
  );
}