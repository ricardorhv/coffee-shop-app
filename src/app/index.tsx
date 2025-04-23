import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground className="flex-1" source={require('@/assets/images/home-background.png')} />

      <LinearGradient 
        colors={['#050505', '#05050550']} 
        className="-mt-[25%] p-6 pb-8 items-center justify-center gap-8"
        start={{ x: 0, y: 0.24 }}
        end={{ x: 0, y: 0 }}
        locations={[0.24, 1]}
      >
        <View className='gap-3'>
          <Text className="font-sora-extra-bold text-white text-[2rem] text-center tracking-widest leading-normal">Apaixone-se pelo Café em um Deleite Encantador!</Text>
          <Text className='text-gray-400 font-sora-regular text-sm text-center leading-normal tracking-wide'>Bem-vindo ao nosso cantinho aconchegante de café, onde cada xícara é um prazer especial para você.</Text>
        </View>

        <TouchableOpacity className='rounded-2xl bg-product-primary px-5 py-4 justify-center items-center w-full'>
          <Link className='text-white font-sora-semibold leading-normal text-base' href={{ pathname: "/(tabs)" }}>Começar</Link>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}
