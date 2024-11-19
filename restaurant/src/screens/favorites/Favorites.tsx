import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useFavoriteStore } from '@/src/hooks/useFavoriteStore'
import { products } from '@/data'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { product } from '@/src/constant/types'
import Card from '@/src/components/Card'

export default function Favorites () {
  const { favorites,  toggleFavorite } =
    useFavoriteStore()
  const insets = useSafeAreaInsets()
  const favList =
    products.filter((item: product) => favorites.includes(item.id)) || []
  console.log(JSON.stringify(favList, null, 2))

  const renderItem = ({ item, index }: { item: product; index: number }) => {
      return <Card item={item} index={index} />
  }

  return (
    <View
      style={{ paddingTop: insets.top + 4 }}
      className='flex-1 h-full w-full'
    >
      <Text className='text-2xl font-bold ms-3 my-2'>Favorites</Text>
      <FlatList
        data={favList}
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
    gap: 16,
    paddingTop: 10,
    paddingBottom: 40
  }
})
