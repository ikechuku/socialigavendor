import React from "react"
import {
  MarketScreen,
  CoinDetailsScreen
} from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator<NavigatorParamList>()
export type NavigatorParamList = {
  MarketScreen: undefined
  CoinDetailsScreen: undefined
}
const MarketNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MarketScreen" component={MarketScreen} />
      <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} />
    </Stack.Navigator>
  )
}

export default MarketNavigator
