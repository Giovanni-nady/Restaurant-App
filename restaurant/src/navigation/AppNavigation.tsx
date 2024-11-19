import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screens/products/Products'
import ProductsDetails from '../screens/productDetails/ProductsDetails'
import { RootStackParams, TapStackParams } from '@/types'
import Favorites from '../screens/favorites/Favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator<RootStackParams>()
const Tab = createBottomTabNavigator<TapStackParams>()

function MyTabs () {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ color, size }: any) => {
          let iconName

          if (route.name === 'Products') {
            iconName = 'view-list'
          } else if (route.name === 'Favorites') {
            iconName = 'heart'
          }
          return (
            <MaterialCommunityIcons
              name={iconName as any}
              size={size}
              color={color}
            />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name='Products'
        component={Products}
      />
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name='Favorites'
        component={Favorites}
      />
    </Tab.Navigator>
  )
}

export default function AppNavigation () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={MyTabs}
      />
      <Stack.Screen name='Details' component={ProductsDetails} />
    </Stack.Navigator>
  )
}
