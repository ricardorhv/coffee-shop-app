import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function User() {
  return (
    <View>
      <Text>User</Text>
      <Link href={{ pathname: "/" }}>Home</Link>
    </View>
  )
}