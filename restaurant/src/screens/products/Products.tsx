import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { products } from '@/data'
import { product } from 'src/constant/types'

export default function Products () {
  const insets = useSafeAreaInsets()

  const renderItem = ({ item }: { item: product }) => {
    return (
      <View className='flex-row bg-neutral-200 gap-3 mx-4 p-3 rounded-lg overflow-hidden'>
        <Image
          source={{ uri: item.image }}
          className='rounded-md w-[100px] h-[100px] bg-gray-400'
        />
        <View className='flex-col gap-2 flex-1'>
          <Text className='font-semibold text-lg'>{item.title}</Text>
          <Text style={{ flexWrap: 'wrap' }} numberOfLines={2}>{item.description}</Text>
          <Text className='text-cyan-900'>${item.price}</Text>
        </View>
      </View>
    )
  }
  return (
    <View
      style={{ paddingTop: insets.top + 4 }}
      className='flex-1 h-full w-full'
    >
      <Text className='text-2xl font-bold ms-3 my-2'>Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    gap: 12,
    paddingBottom: 40
  }
})
