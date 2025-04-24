import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent />
      <Tabs screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
      }}>
        <Tabs.Screen name="index" options={{ headerShown: false, tabBarIcon: ({ focused }) => <FontAwesome6 color={`${focused ? '#C67C4E' : '#A2A2A2'}`} solid={focused} name="house" size={20} /> }} />
        <Tabs.Screen name="user" options={{headerTitle: 'Perfil', tabBarIcon: ({ focused }) => <FontAwesome6 color={`${focused ? '#C67C4E' : '#A2A2A2'}`} solid={focused} name="user" size={20} /> }} />
      </Tabs>
    </>
  )
}