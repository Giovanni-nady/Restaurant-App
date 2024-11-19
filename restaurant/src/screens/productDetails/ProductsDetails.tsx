import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useFavoriteStore } from '@/src/hooks/useFavoriteStore'

export default function ProductsDetails ({ route, navigation }: any) {
  const { id, title, image, description, price, isFavorite } = route.params
  const { toggleFavorite } = useFavoriteStore()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title
    })
  }, [navigation, title])

  return (
    <View className='flex-1'>
      <Image source={{ uri: image }} className='w-full h-2/5 bg-gray-400' />
      <View className='m-3'>
        <View className='flex-row justify-between'>
          <Text className='font-semibold text-2xl'>{title}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(id)}>
            <MaterialIcons
              name={isFavorite ? 'favorite' : 'favorite-border'}
              size={24}
              color={isFavorite ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <Text className='font-semibold text-xl text-cyan-900'>$ {price}</Text>
        <Text className='text-lg text-gray-800 mt-1'>{description}</Text>
      </View>
    </View>
  )
}
