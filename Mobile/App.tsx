import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { shadowGenerator } from './utils/generate-shadow';

// Images
const plantIcon = require('./assets/plantIcon.png')

export default function App() {
  return (
    // <View className='flex-1 relative'>
    //   <StatusBar style='dark' />
    //   <Image
    //     source={require('./assets/background.png')}
    //     blurRadius={70}
    //     className='absolute h-full w-full'

    //   />

    //   {/* View for weather data */}
    //   <View className='mx-4 flex justify-around flex-1 mb-2'>
    //     {/* <Text className='text-zinc-900 text-center text-xl font-bold'>
    //       Ultima atualização:
    //       <Text className='text-lg font-semibold text-zinc-700'>
    //         10/10/2023 - 23:00
    //       </Text>
    //     </Text> */}

    //     <View className='flex-row justify-center'>
    //       <Image
    //         source={require('./assets/plantIcon.png')}
    //         className='w-52 h-52 rounded-full drop-shadow-lg'
    //       />
    //     </View>
    //     <View className='space-y-2'>
    //       <Text className='text-center text-zinc-800 text-6xl ml-5 font-bold'>
    //         23°
    //       </Text>
    //     </View>

    //   </View>
    // </View>
    <View className='h-screen flex-1'>
      <StatusBar />
      <View className='bg-blue-500 h-[70%] relative'>
        <View style={shadowGenerator({ value: 6 })} className='mt-10 top-5 flex flex-row justify-between items-center bg-blue-200 h-[7%] m-3 rounded-xl'>
          <View className='flex flex-row gap-3 ml-3'>
            <Text>
              {'10/10/2023 23:00'}
            </Text>
          </View>
          <View className='flex flex-row gap-4 mr-3'>
            <TouchableOpacity>
              <Icon name='refresh' size={18} className='' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='history' size={18} className='' />
            </TouchableOpacity>
          </View>
        </View>

        <View className='flex-1 flex-col items-center justify-center gap-2'>
          <Image source={require('./assets/3d_plant.png')} resizeMode='contain' className='h-64 w-64  rounded-full' />
          <Text className='text-6xl left-3 text-center font-bold leading-tight text-white'>
            20°
          </Text>
        </View>

      </View>

      {/* Second View */}
      <View className='bg-gray-100 h-64  relative'>
        <View style={shadowGenerator({ value: 7 })} className='h-28 mr-12 ml-12 bottom-14 rounded-lg bg-blue-200 flex-row justify-around shadow-black shadow-sm'>
          <View className='h-full flex flex-col justify-center items-center'>
            <Icon name='water' color={'#4ABADD'} size={30} />
            <Text className='text-center'>
              Umidade
            </Text>
            <Text className='text-center leading-tight font-bold text-lg'>
              20%
            </Text>
          </View>
          <View className='h-full flex flex-col justify-center items-center'>
            <Icon size={30} color={'#f2c415'} name='white-balance-sunny' />
            <Text className='text-center'>
              Iluminação
            </Text>
            <Text className='text-center leading-tight font-bold text-lg'>
              20%
            </Text>
          </View>
        </View>
        <Text className='font-bold text-lg bottom-10'>Hoje</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          className='bottom-10 mr-3'
        >
          <View className='h-32 flex flex-row items-center gap-3'>
            <View className='w-28 h-28 rounded-3xl flex flex-row items-center p-2 bg-blue-200' style={shadowGenerator({ value: 2 })}>
              <View>
                <Icon size={30} name='thermometer' />
                <Icon size={30} name='water' />
                <Icon size={30} name='white-balance-sunny' color={'#f2c415'} />
              </View>
              <View className='flex gap-3 '>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20°
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
              </View>
            </View>



            <View className='w-28 h-28 rounded-3xl flex flex-row items-center p-2  bg-blue-200' style={shadowGenerator({ value: 2 })}>
              <View>
                <Icon size={30} name='thermometer' />
                <Icon size={30} name='water' />
                <Icon size={30} name='white-balance-sunny' color={'#f2c415'} />
              </View>
              <View className='flex gap-3 '>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20°
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
              </View>
            </View>
            <View className='w-28 h-28 rounded-3xl flex flex-row items-center p-2  bg-blue-200' style={shadowGenerator({ value: 2 })}>
              <View>
                <Icon size={30} name='thermometer' />
                <Icon size={30} name='water' />
                <Icon size={30} name='white-balance-sunny' color={'#f2c415'} />
              </View>
              <View className='flex gap-3 '>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20°
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
              </View>
            </View>
            <View className='w-28 h-28 rounded-3xl flex flex-row items-center p-2  bg-blue-200' style={shadowGenerator({ value: 2 })}>
              <View>
                <Icon size={30} name='thermometer' />
                <Icon size={30} name='water' />
                <Icon size={30} name='white-balance-sunny' color={'#f2c415'} />
              </View>
              <View className='flex gap-3 '>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20°
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
                <Text className='font-bold text-md leading-tight text-zinc-900'>
                  20
                </Text>
              </View>
            </View>


          </View>
        </ScrollView>

      </View>
    </View>
  );
}

