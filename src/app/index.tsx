import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()

  function handleGetStarted() {
    router.push('/(tabs)')
  }

  return (
    <View className="flex-1">
      <ImageBackground className="flex-1 justify-end -mb-[30%]" source={require('@/assets/images/home-background.png')}/>

        <LinearGradient 
          colors={['#050505', '#05050500']} 
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0.7, 1]}
        >
          <View className='p-6 mb-12 gap-8'>
            <View className='gap-3'>
              <Text className="font-sora-extra-bold text-white text-[2rem] text-center tracking-widest leading-normal">Apaixone-se pelo Café em um Deleite Encantador!</Text>
              <Text className='text-gray-400 font-sora-regular text-sm text-center leading-normal tracking-wide'>Bem-vindo ao nosso cantinho aconchegante de café, onde cada xícara é um prazer especial para você.</Text>
            </View>

            <TouchableOpacity onPress={handleGetStarted} className='rounded-2xl bg-product-primary px-5 py-4 w-full'>
              <Text className='text-white font-sora-semibold leading-normal text-base text-center'>Começar</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
    </View>
  );
}
