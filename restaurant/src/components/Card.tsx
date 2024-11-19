import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { product } from '@/src/constant/types'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useFavoriteStore } from '../hooks/useFavoriteStore'
import { MaterialIcons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/commonjs/src/types'
import { useNavigation } from '@react-navigation/native'

export default function Card ({
  item,
  index
}: {
  item: product
  index: number
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const { favorites, toggleFavorite } = useFavoriteStore()
  const isFavorite = favorites.includes(item.id)
  return (
    <Animated.View
      entering={
        FadeInDown.delay(index * 200)
          .duration(1000)
          .springify()
        // .damping(14)
      }
    >
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            id: item.id,
            title: item.title,
            image: item.image,
            description: item.description,
            price: item.price,
            isFavorite
          })
        }
      >
        <View className='flex-row bg-neutral-200 gap-3 mx-4 p-3 rounded-lg overflow-hidden border border-gray-300 shadow-lg shadow-black'>
          <Image
            source={{ uri: item.image }}
            className='rounded-md w-[100px] h-[100px] bg-gray-400'
          />
          <View className='flex-col gap-2 flex-1'>
            <View className='flex-row justify-between'>
              <Text className='font-semibold text-lg'>{item.title}</Text>
              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                <MaterialIcons
                  name={isFavorite ? 'favorite' : 'favorite-border'}
                  size={24}
                  color={isFavorite ? 'red' : 'black'}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ flexWrap: 'wrap' }} numberOfLines={2}>
              {item.description}
            </Text>
            <Text className='text-cyan-900'>${item.price}</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  )
}
