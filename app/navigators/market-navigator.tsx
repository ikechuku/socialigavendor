import React from "react"
import { AddProductScreen, AddPricing, CoinDetailsScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<NavigatorParamList>();
export type NavigatorParamList = {
  AddProductScreen: undefined;
  CoinDetailsScreen: undefined;
};
const MarketNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Product" component={AddProductScreen} />
      <Stack.Screen name="AddPricing" component={AddPricing} />
      <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MarketNavigator
