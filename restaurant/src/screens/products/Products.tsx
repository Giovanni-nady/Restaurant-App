import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { products } from '@/data'
import { product } from 'src/constant/types'
import Card from '@/src/components/Card'

export default function Products () {
  const insets = useSafeAreaInsets()

  const renderItem = ({ item, index }: { item: product; index: number }) => {
    return <Card item={item} index={index} />
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
        keyExtractor={item => item.id?.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        initialNumToRender={10} 
        maxToRenderPerBatch={5}
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
