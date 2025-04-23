import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'red'
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <FontAwesome name="home" size={20} /> }} />
      <Tabs.Screen name="user" options={{ title: 'User', tabBarIcon: () => <FontAwesome name="user-circle" size={20} /> }} />
    </Tabs>
  )
}