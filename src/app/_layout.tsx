import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { StatusBar, Text } from "react-native";
import '../styles/global.css';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'Sora_ExtraBold': require('@/assets/fonts/Sora-ExtraBold.ttf'),
    'Sora_Bold': require('@/assets/fonts/Sora-Bold.ttf'),
    'Sora_SemiBold': require('@/assets/fonts/Sora-SemiBold.ttf'),
    'Sora_Medium': require('@/assets/fonts/Sora-Medium.ttf'),
    'Sora_Regular': require('@/assets/fonts/Sora-Regular.ttf'),
    'Sora_Light': require('@/assets/fonts/Sora-Light.ttf'),
    'Sora_ExtraLight': require('@/assets/fonts/Sora-ExtraLight.ttf'),
    'Sora_Thin': require('@/assets/fonts/Sora-Thin.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return <Text>Carregando</Text>
  }

  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="coffee/[id]" options={{ headerTitle: "Detalhes", headerBackButtonDisplayMode: 'minimal' }} />
        </Stack>
      </>
  )
}
