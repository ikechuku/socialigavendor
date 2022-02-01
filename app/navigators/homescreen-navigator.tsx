import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PortfolioHomeScreen,
  BuyCoinScreen,
  SellCoinScreen,
  BuySellScreen,
  CoinDetailsScreen,
  TransactionHistoryScreen,
  PaymentOptionsScreen,
  ReceiveCoinScreen,
  ReceiveBTCScreen,
  SwapCoinScreen,
  SentScreen,
  HighNetworkScreen,
  ConfirmSwapScreen,
} from "../screens";

export type SettingsParamList = {
  PortfolioHomeScreen: undefined;
  BuyCoinScreen: undefined;
  SellCoinScreen: undefined;
  BuySellScreen: undefined;
  CoinDetailsScreen: undefined;
  TransactionHistoryScreen: undefined;
  PaymentOptionsScreen: undefined;
  ReceiveCoinScreen: undefined;
  ReceiveBTCScreen: undefined;
  SwapCoinScreen: undefined;
  SentScreen: undefined;
  HighNetworkScreen: undefined;
  ConfirmSwapScreen: undefined;
};

const Stack = createStackNavigator<SettingsParamList>();
const Settings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="PortfolioHomeScreen"
        component={PortfolioHomeScreen}
      />
      <Stack.Screen name="BuyCoinScreen" component={BuyCoinScreen} />
      <Stack.Screen name="SellCoinScreen" component={SellCoinScreen} />
      <Stack.Screen name="BuySellScreen" component={BuySellScreen} />
      <Stack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} />
      <Stack.Screen
        name="PaymentOptionsScreen"
        component={PaymentOptionsScreen}
      />
      <Stack.Screen name="ReceiveCoinScreen" component={ReceiveCoinScreen} />
      <Stack.Screen name="ReceiveBTCScreen" component={ReceiveBTCScreen} />
      <Stack.Screen name="SwapCoinScreen" component={SwapCoinScreen} />
      <Stack.Screen name="SentScreen" component={SentScreen} />
      <Stack.Screen name="HighNetworkScreen" component={HighNetworkScreen} />
      <Stack.Screen name="ConfirmSwapScreen" component={ConfirmSwapScreen} />
      {/* <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} /> */}
      {/* <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export default Settings;
